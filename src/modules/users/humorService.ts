import api from "@/shared/services/apiService";

export interface HumorRegistro {
  humor: string;
  criado_em: string;
  id_ws: string;
  ajuda: string;
}

export async function verificarEnvioHoje(): Promise<HumorRegistro[]> {
  const response = await api.get("/humor");
  return response.data;
}

export async function enviarHumor(
  humor: string,
  comentario: string,
  id_ws: string,
  ajuda: string
): Promise<void> {
  await api.post("/humor", {
    humor,
    comentario,
    id_ws,
    ajuda
  });
}



