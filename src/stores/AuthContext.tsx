import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface URLPerfilParams {
  nomeCompleto: string;
  setor: string;
  email: string;
  id: number;
  usuario: string;
}

interface ColaboradorAPI {
  cargo: string;
  foto: string;
  data_admissao: string;
  data_demissao: string | null;
  hierarquia_id: number;
  area_id: string;
  setor_id: string;
  centro_custo_id: string;
  comite_id: string;
  comissao_id: string;
  programa_id: string;
  equipe_id: string;
  ws_id: string;
  ativo: number;
}

export type Perfil = URLPerfilParams & Partial<ColaboradorAPI>;

interface AuthContextType {
  perfil: Perfil;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [perfil, setPerfil] = useState<Perfil | null>(null);

  useEffect(() => {
    function parseURL(): URLPerfilParams | null {
      const params = new URLSearchParams(window.location.search);
      const nomeCompleto = params.get("nomeCompleto");
      const setor = params.get("setor");
      const email = params.get("email");
      const idStr = params.get("id");
      const usuario = params.get("usuario");

      if (!nomeCompleto || !setor || !email || !idStr || !usuario) {
        return null;
      }
      const id = Number(idStr);
      if (Number.isNaN(id)) return null;

      return { nomeCompleto, setor, email, id, usuario };
    }

    const urlPerfil = parseURL();
    const storedJSON = localStorage.getItem("uniservices-unimed-pelotas");
    const storedPerfil = storedJSON ? (JSON.parse(storedJSON) as Perfil) : null;

    if (urlPerfil) {
      window.history.replaceState({}, document.title, window.location.pathname);
      setPerfil(urlPerfil);
    } else if (storedPerfil) {
      setPerfil(storedPerfil);
    } else {
      window.location.href = "https://ws2.unimedpelotas.com.br/ws/";
    }
  }, []);

  useEffect(() => {
    if (!perfil) return;

    if ("ws_id" in perfil) return;

    fetch(`http://192.168.74.179:9985/api/organograma/${perfil.id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ${res.status}`);
        return res.json() as Promise<ColaboradorAPI>;
      })
      .then((apiData) => {
        setPerfil((prev) => {
          if (!prev) return apiData as Perfil;
          return { ...prev, ...apiData };
        });
      })
      .catch((err) => {
        console.error("Falha ao buscar colaborador:", err);
      });
  }, [perfil]);


  useEffect(() => {
    if (perfil) {
      localStorage.setItem("uniservices-unimed-pelotas", JSON.stringify(perfil));
    }
  }, [perfil]);

  if (!perfil) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ perfil }}>
      {children}
    </AuthContext.Provider>
  );
};