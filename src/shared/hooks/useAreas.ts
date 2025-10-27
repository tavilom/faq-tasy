import { useState, useEffect } from "react";
import type { Area } from "@/types/store/Area";

const useAreas = () => {
  const [area, setAreas] = useState<Area[]>([]);
  const [loadingAreas, setLoadingAreas] = useState(true);
  const [errorAreas, setErrorAreas] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch(`${apiUrl}/organograma/areas/`);
        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setAreas(data);
      } catch (error: any) {
        setErrorAreas(error.message);
      } finally {
        setLoadingAreas(false);
      }
    };

    fetchAreas();
  }, []);

  return { area, loadingAreas, errorAreas };
};

export default useAreas;
