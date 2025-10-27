import { useState, useEffect } from "react";
import type { Acesso } from "@/types/store/Acesso";

const useAcessos = (usuario?: string) => {
  const [acesso, setAcesso] = useState<Acesso | null>(null);
  const [loadingAcesso, setLoadingAcesso] = useState(true);
  const [errorAcesso, setErrorAcesso] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchAcesso = async () => {
      if (!usuario) {
        setErrorAcesso("Usuário não informado");
        setLoadingAcesso(false);
        return;
      }

      try {
        const headers = new Headers();
        headers.set("Content-Type", "application/json");

        const response = await fetch(
          `${apiUrl}/acesso/acessos/${usuario}`,
          { headers }
        );

        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setAcesso(data);
      } catch (error: any) {
        setErrorAcesso(error.message);
      } finally {
        setLoadingAcesso(false);
      }
    };

    fetchAcesso();
  }, [apiUrl, usuario]);

  return { acesso, loadingAcesso, errorAcesso };
};

export default useAcessos;
