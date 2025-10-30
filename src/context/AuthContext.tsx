"use client";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  useRef,
  JSX,
} from "react";
import useAcessos from "@/shared/hooks/useAcessos";
import { CircularProgress, Box } from "@mui/material";

// --- Tipos -----------------------------------------------------------------
export interface Perfil {
  usuario?: string;
  permissoes?: string;
  email?: string;
  id?: string;
  nomecompleto?: string; // guardamos em lower-case
  [key: string]: string | undefined;
}
export interface AuthContextType {
  perfil: Perfil;
  setPerfil: Dispatch<SetStateAction<Perfil>>;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

// --- Contexto --------------------------------------------------------------
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// --- Constantes ------------------------------------------------------------
const STORAGE_KEY = "faq_tasy_novo";
const REDIRECT_FLAG = "faq_tasy_novo_redirected";

// Normaliza objeto: lower-case keys, trim e só strings não vazias
function normalizePerfil(p: Record<string, any> | null | undefined): Perfil {
  if (!p) return {};
  const out: Perfil = {};
  Object.keys(p).forEach((k) => {
    const key = k.toLowerCase();
    const val = p[k];
    if (typeof val === "string") {
      const v = val.trim();
      if (v) out[key] = v;
    }
  });
  return out;
}

// Lê URL + localStorage sincronamente (na 1ª render do cliente)
function getInitialPerfil(): Perfil {
  if (typeof window === "undefined") return {};
  // URL (espera: nomeCompleto, email, id, usuario)
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Perfil = {};
  params.forEach((rawValue, rawKey) => {
    const key = rawKey.toLowerCase();
    const value = (rawValue ?? "").trim();
    if (!value) return;
    fromUrl[key] = value;
  });

  // localStorage (fallback)
  let fromStorage: Perfil = {};
  try {
    const storedJSON = window.localStorage.getItem(STORAGE_KEY);
    fromStorage = normalizePerfil(storedJSON ? JSON.parse(storedJSON) : {});
  } catch {
    fromStorage = {};
  }

  return Object.keys(fromUrl).length > 0 ? fromUrl : fromStorage;
}

export function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  // <<< Inicializa já com URL/localStorage, evitando corrida de efeitos >>>
  const [perfil, setPerfil] = useState<Perfil>(() => getInitialPerfil());
  const [ready, setReady] = useState<boolean>(typeof window !== "undefined"); // já pronto no cliente
  const hasRedirectedRef = useRef(false);

  const { acesso, loadingAcesso } = useAcessos();

  // Limpa a query string apenas uma vez se veio algo pela URL
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hadQuery = window.location.search.length > 1;
    if (hadQuery) {
      const u = new URL(window.location.href);
      u.search = "";
      window.history.replaceState({}, document.title, u.toString());
    }
  }, []);

  // Persistir quando houver algum identificador
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasIdentity = Boolean((perfil.usuario || perfil.email || perfil.id || "").trim());
    if (hasIdentity) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(perfil));
      } catch {
        /* ignore */
      }
    }
    // como estamos no cliente, podemos considerar "ready" true
    setReady(true);
  }, [perfil]);

  // Redirecionar só se: pronto, sem identificador, e sem loop na sessão
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ready) return;
    if (hasRedirectedRef.current) return;

    const hasIdentity = Boolean((perfil.usuario || perfil.email || perfil.id || "").trim());
    const alreadyRedirected = window.sessionStorage.getItem(REDIRECT_FLAG) === "1";

    if (!hasIdentity && !alreadyRedirected) {
      hasRedirectedRef.current = true;
      window.sessionStorage.setItem(REDIRECT_FLAG, "1");
      window.location.replace("https://ws2.unimedpelotas.com.br/ws/");
    }
  }, [ready, perfil.usuario, perfil.email, perfil.id]);

  // Sincronizar com serviço de acessos (preenche usuario/permissoes se vierem)
  useEffect(() => {
    if (loadingAcesso) return;

    const maybeUser =
      (Array.isArray(acesso) ? acesso?.[0]?.usuario : acesso?.usuario) ?? "";

    if (!perfil.usuario && typeof maybeUser === "string" && maybeUser.trim() !== "") {
      setPerfil((prev) => ({ ...prev, usuario: maybeUser.trim() }));
    }

    if (perfil.usuario) {
      const lista = Array.isArray(acesso) ? acesso : acesso ? [acesso] : [];
      const match = lista.find(
        (a: any) =>
          String(a?.usuario ?? "").toLowerCase() === String(perfil.usuario).toLowerCase()
      );
      if (match && match.permissoes !== perfil.permissoes) {
        setPerfil((prev) => ({ ...prev, permissoes: match.permissoes }));
      }
    }
  }, [acesso, loadingAcesso, perfil.usuario, perfil.permissoes]);

  // Loader
  if (!ready || loadingAcesso) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <AuthContext.Provider value={{ perfil, setPerfil }}>
      {children}
    </AuthContext.Provider>
  );
}
