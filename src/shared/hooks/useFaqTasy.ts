import { FaqTasy } from "@/types/store/FaqTasy";
import { useCallback, useEffect, useState } from "react";

const useFaqTasy = () => {
  const [faqtasy, setFaqTasy] = useState<FaqTasy[]>([]);
  const [loadingFaqTasy, setLoadingFaqTasy] = useState(true);
  const [errorFaqTasy, setErrorFaqTasy] = useState("");

  // estados de update
  const [updatingFaqTasy, setUpdatingFaqTasy] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);

  // estados de delete
  const [deletingFaqId, setDeletingFaqId] = useState<number | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  // const apiUrl = "http://192.168.74.179:9923/api/faq_tasy";
  const apiUrl = "http://localhost:9923/api/faq_tasy";

  const fetchFaq = useCallback(async () => {
    try {
      setLoadingFaqTasy(true);
      setErrorFaqTasy("");

      const headers = new Headers();
      headers.set("Content-Type", "application/json");

      const response = await fetch(apiUrl, { headers });
      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setFaqTasy(Array.isArray(data) ? data : []);
    } catch (error: any) {
      setErrorFaqTasy(error?.message ?? "Falha ao carregar Faq");
    } finally {
      setLoadingFaqTasy(false);
    }
  }, [apiUrl]);

  // PATCH parcial
  const updateFaqTasyPartial = useCallback(
    async (id: number, patch: Partial<FaqTasy>): Promise<FaqTasy | null> => {
      setUpdateError(null);
      setUpdatingFaqTasy(true);
      try {
        const res = await fetch(`${apiUrl}/${id}`, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(patch),
        });
        if (!res.ok) {
          throw new Error(`Erro ao atualiza faz: ${res.status} ${res.statusText}`);
        }
        const updated: FaqTasy = await res.json();

        setFaqTasy((prev) => {
          const arr = Array.isArray(prev) ? prev.slice() : [];
          const idx = arr.findIndex((t) => Number(t.id) === Number(id));
          if (idx >= 0) arr[idx] = updated;
          else arr.unshift(updated);
          return arr;
        });

        return updated;
      } catch (e: any) {
        setUpdateError(e?.message ?? "Falha ao atualizar faq");
        return null;
      } finally {
        setUpdatingFaqTasy(false);
      }
    },
    [apiUrl]
  );

  // DELETE (remove do backend e do estado local)
  const deleteFaqTasy = useCallback(
    async (id: number): Promise<boolean> => {
      setDeleteError(null);
      setDeletingFaqId(id);
      try {
        const res = await fetch(`${apiUrl}/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          // tenta mensagem do backend
          let msg = `Erro ao excluir: ${res.status} ${res.statusText}`;
          try {
            const j = await res.json();
            if (j?.message) msg = String(j.message);
            if (j?.error) msg = String(j.error);
          } catch {}
          throw new Error(msg);
        }

        // remove do estado local
        setFaqTasy((prev) => (Array.isArray(prev) ? prev.filter((t) => Number(t.id) !== Number(id)) : prev));
        return true;
      } catch (e: any) {
        setDeleteError(e?.message ?? "Falha ao excluir faq");
        return false;
      } finally {
        setDeletingFaqId(null);
      }
    },
    [apiUrl]
  );

  useEffect(() => {
    fetchFaq();
  }, [fetchFaq]);

  return {
    // dados
    faqtasy,
    loadingFaqTasy,
    errorFaqTasy,
    apiUrl,

    // reload
    refreshFaqTasy: fetchFaq,

    // update
    updatingFaqTasy,
    updateError,
    updateFaqTasyPartial,

    // delete
    deletingFaqId,
    deleteError,
    deleteFaqTasy,
  };
};

export default useFaqTasy;
