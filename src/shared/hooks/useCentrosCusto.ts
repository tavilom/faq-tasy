import { useState, useEffect } from "react";
import type { CentroCusto } from "@/types/store/CentroCusto";

const useCentrosCusto = () => {
    const [centrosCusto, setCentrosCusto] = useState<CentroCusto[]>([]);
    const [loadingCentroCusto, setLoadingCentroCusto] = useState(true);
    const [errorCentroCusto, setErrorCentroCusto] = useState("");

    // Pegando valores do .env
    const apiUrl = 'http://localhost:9986/api/organograma/centros';

    useEffect(() => {
        const fetchCentroCusto = async () => {
            try {
                const headers = new Headers();
                //headers.set('Authorization', 'Basic ' + btoa(${username}:${password}));
                headers.set('Content-Type', 'application/json');

                const response = await fetch(apiUrl, { headers });

                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                
                setCentrosCusto(data);
            } catch (error: any) {
                setErrorCentroCusto(error.message);
            } finally {
                setLoadingCentroCusto(false);
            }
        };

        fetchCentroCusto();

    }, []);

    return { centrosCusto, loadingCentroCusto, errorCentroCusto };
};

export default useCentrosCusto;