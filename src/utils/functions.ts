import pinheiro from "@/assets/images/pinheiro.jpg";
import logoUnimedImage from "@/assets/images/logo_unimed.png";
import pinheiropng from "@/assets/images/pinheiroIcon.png"

// Exporte como constantes
export const logoPinheiro: string = pinheiro;
export const logoUnimed: string = logoUnimedImage;
export const logoPinheiroPNG: string = pinheiropng;


//======= função para pegar dados do perfil
import type { Acesso } from "@/types/store/Acesso";

/** Perfil mínimo esperado vindo do AuthContext (ajuste campos conforme o seu projeto) */
export type PerfilMin = {
  nomeCompleto?: string;
  setor?: string;
  cargo?: string;
  foto?: string;
  permissoes?: string[] | string;
  // possíveis identificadores aceitos pela sua API (ajuste se souber exatamente qual é)
  usuario?: string;
  matricula?: string | number;
  login?: string;
  email?: string;
  id?: string | number;
};

export type ResultadoAcessoDoPerfil = {
  usuario?: string;                 // identificador usado na consulta
  perfil: {
    nomeCompleto: string;
    setor: string;
    cargo: string;
    foto?: string;
    permissoes: string[] | string;
  };
  acesso: Acesso | null;            // resposta da API
  error: string;                    // string vazia se deu tudo certo
  status: "success" | "error";      // status da operação
};

/** Tenta extrair o identificador de usuário a partir do objeto de perfil */
export function resolverUsuarioDoPerfil(perfil?: PerfilMin): string | undefined {
  if (!perfil) return undefined;
  const candidato =
    perfil.usuario ??
    perfil.matricula ??
    perfil.login ??
    perfil.email ??
    perfil.id;

  return candidato != null ? String(candidato) : undefined;
}

/**
 * Lê TODOS os dados de acesso do perfil:
 * - Determina o identificador do usuário a partir do `perfil`
 * - Consulta a API `${apiUrl}/acesso/acessos/:usuario`
 * - Retorna o resumo do perfil + os acessos
 *
 * @param perfil  Objeto de perfil (do AuthContext)
 * @param apiUrl  Base URL da API (por padrão usa import.meta.env.VITE_API_URL)
 * @param opts    Opções de requisição (token Bearer, credentials p/ cookie/sessão, AbortSignal)
 */
export async function getAcessoDoPerfil(
  perfil?: PerfilMin,
  apiUrl: string | undefined = import.meta.env.VITE_API_URL as string | undefined,
  opts: {
    token?: string;                       // Authorization: Bearer <token>
    credentials?: RequestCredentials;     // "include" se usar cookie de sessão
    signal?: AbortSignal;                 // para cancelar a requisição
  } = {}
): Promise<ResultadoAcessoDoPerfil> {
  const usuario = resolverUsuarioDoPerfil(perfil);

  // monta resultado base
  const base: Omit<ResultadoAcessoDoPerfil, "acesso" | "error" | "status"> = {
    usuario,
    perfil: {
      nomeCompleto: perfil?.nomeCompleto ?? "",
      setor: perfil?.setor ?? "",
      cargo: perfil?.cargo ?? "",
      foto: perfil?.foto,
      permissoes: perfil?.permissoes ?? [],
    },
  } as any;

  // validações rápidas
  if (!usuario) {
    return {
      ...base,
      acesso: null,
      error: "Perfil sem identificador de usuário",
      status: "error",
    };
  }
  const baseUrl = (apiUrl ?? "").replace(/\/+$/, "");
  if (!baseUrl) {
    return {
      ...base,
      acesso: null,
      error: "VITE_API_URL não configurada",
      status: "error",
    };
  }

  try {
    const headers = new Headers();
    headers.set("Accept", "application/json");
    if (opts.token) headers.set("Authorization", `Bearer ${opts.token}`);

    const resp = await fetch(`${baseUrl}/acesso/acessos/${encodeURIComponent(usuario)}`, {
      method: "GET",
      headers,
      credentials: opts.credentials,
      signal: opts.signal,
    });

    if (!resp.ok) {
      throw new Error(`Erro: ${resp.status} - ${resp.statusText}`);
    }

    // Trata 204/sem corpo
    const semConteudo = resp.status === 204 || resp.headers.get("content-length") === "0";
    const acesso: Acesso | null = semConteudo ? null : await resp.json();

    return {
      ...base,
      acesso,
      error: "",
      status: "success",
    };
  } catch (err: any) {
    if (err?.name === "AbortError") {
      // se quiser tratar cancelamento como "erro" ou como sucesso vazio, ajuste aqui
      return {
        ...base,
        acesso: null,
        error: "Requisição cancelada",
        status: "error",
      };
    }
    return {
      ...base,
      acesso: null,
      error: err?.message ?? "Erro desconhecido",
      status: "error",
    };
  }
}

// ==============