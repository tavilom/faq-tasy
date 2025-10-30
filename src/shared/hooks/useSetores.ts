import { Setor } from "@/types/store/Setor"
import { useEffect, useState } from "react"

const useSetores = () => {
    const [setor, setSetor] = useState<Setor[]>([]);
    const [loadingSetor, setLoadingSetor] = useState(true);
    const [errorSetor, setErrorSetor] = useState("");

    const apiUrl = 'http://192.168.74.179:9986/api/organograma/setores';

    useEffect(() => {
        const fetchSetor = async () => {
            try {
                const headers = new Headers();
                //headers.set('Authorization', 'Basic ' + btoa(${username}:${password}));
                headers.set('Content-Type', 'application/json');

                const response = await fetch(apiUrl, { headers });

                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();

                setSetor(data);
            } catch (error: any) {
                setErrorSetor(error.message);
            }finally{
                setLoadingSetor(false);
            }
        };

        fetchSetor();
    }, []);

    return { setor, loadingSetor, errorSetor};
};

export default useSetores;