import { FaqTasy } from "@/types/store/FaqTasy"
import { useCallback, useEffect, useState } from "react"

const useFaqTasy = () => {
    const [faqtasy, setFaqTasy] = useState<FaqTasy[]>([]);
    const [loadingFaqTasy, setLoadingFaqTasy] = useState(true);
    const [errorFaqTasy, setErrorFaqTasy] = useState("");

    //estado específicos para update
    const [updatingFatTasy, setUpdatingFatTasy] = useState(false);
    const [updateError, setUpdateError] = useState<string | null>(null);

    const apiUrl = "http://localhost:9923/faq_tasy/faq_tasy";

    const fetchFaq =  useCallback(async () => {
        try {
            setLoadingFaqTasy(true);
            setErrorFaqTasy("");

            const headers = new Headers();
            headers.set("Content-type", "application/json");

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

    // PATCH parcial (atualiza a faq e reflete no estado local)
    const updateFaqTasyPartial =  useCallback(
        async (id: number, patch: Partial<FaqTasy>): Promise<FaqTasy | null> => {
            setUpdateError(null);
            setUpdatingFatTasy(true);
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
                    const idx =  arr.findIndex((t) => Number(t.id) === Number(id));
                    if (idx >= 0) arr[idx] = updated;
                    else arr.unshift(updated);
                    return arr;
                });

                return updated;
            } catch (e: any) {
                setUpdateError(e?.message ?? "Falha ao atualizar faq");
                return null;
            } finally {
                setUpdatingFatTasy(false);
            }
        },
        [apiUrl]
    );

    useEffect(() => {
        fetchFaq();
    }, [fetchFaq]);

    return {
        faqtasy,
        loadingFaqTasy,
        errorFaqTasy,
        apiUrl,
        refreshFaqTasy: fetchFaq,
        updatingFatTasy,
        updateError,
        updateFaqTasyPartial,
    };
};

export default useFaqTasy;