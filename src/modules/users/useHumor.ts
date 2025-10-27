import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import {
  verificarEnvioHoje,
  enviarHumor as enviarHumorAPI,
} from "./humorService";
import { AuthContext } from "@/context/AuthContext";

export function useHumor() {
  const [status, setStatus] = useState<string>("");
  const [comentario, setComentario] = useState<string>("");
  const [humorSelecionado, setHumorSelecionado] = useState<string>("");
  const [enviadoHoje, setEnviadoHoje] = useState<boolean>(false);
  const { perfil } = useContext(AuthContext);
  const [mostrarGrafico, setMostrarGrafico] = useState(false);
  const [ajuda, setAjuda] = useState<boolean>(false);


  useEffect(() => {
    if (!perfil?.id) return;

    const verificarEnvio = async () => {
      try {
        const hoje = new Date()
          .toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })
          .split("/")
          .reverse()
          .join("-");

        const data = await verificarEnvioHoje();

        const enviado = data.some((registro) => {
          const dataRegistro = new Date(registro.criado_em)
            .toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })
            .split("/")
            .reverse()
            .join("-");
          return dataRegistro === hoje && registro.id_ws === perfil.id;
        });

        if (enviado) {
          setEnviadoHoje(true);
          Swal.fire({
            icon: "info",
            title: "Já enviado",
            text: "Você já registrou seu humor hoje!",
            showCancelButton: true,
            confirmButtonText: "Ver gráfico do seu humor",
            cancelButtonText: "Fechar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#aaa",
          }).then((result) => {
            if (result.isConfirmed) {
              setMostrarGrafico(true);
            }
          });
        }
      } catch (error) {
        console.error("Erro ao verificar envio:", error);
      }
    };

    verificarEnvio();
  }, [perfil?.id]);

  const handleClickHumor = (label: string) => {
    if (enviadoHoje) {
      Swal.fire({
        icon: "error",
        title: "Atenção",
        text: "Você já enviou seu humor hoje e não pode enviar novamente.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    setHumorSelecionado(label);

    setAjuda(false);
  };

  const enviarHumor = async () => {
    if (!humorSelecionado) {
      setStatus("Selecione um humor antes de enviar.");
      return;
    }

    const humorRequerComentario = ["muito ruim", "ruim"];
    if (
      humorRequerComentario.includes(humorSelecionado.toLowerCase()) &&
      !comentario.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Atenção",
        text: "Por favor, adicione um comentário ao selecionar um humor negativo.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    if (enviadoHoje) {
      setStatus("Você já enviou seu humor hoje.");
      return;
    }

    setStatus("Enviando...");

    try {
      await enviarHumorAPI(
        humorSelecionado,
        comentario,
        perfil!.id!.toString(),
        ajuda ? "sim" : "não"
      );

      Swal.fire({
        icon: "success",
        title: "Pronto!",
        text: `Humor "${humorSelecionado}" enviado com sucesso.`,
        showCancelButton: true,
        confirmButtonText: "Ver gráfico do seu humor",
        cancelButtonText: "Fechar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#aaa",
      }).then((result) => {
        if (result.isConfirmed) {
          setMostrarGrafico(true);
        }
      });

      setStatus("");
      setEnviadoHoje(true);
      setComentario("");

      setAjuda(false);
    } catch (error) {
      setStatus("Erro ao conectar com o servidor.");
    }
  };

  return {
    status,
    comentario,
    setComentario,
    humorSelecionado,
    ajuda,          
    setAjuda,      
    enviadoHoje,
    handleClickHumor,
    enviarHumor,
    setHumorSelecionado,
    setMostrarGrafico,
    mostrarGrafico,
    perfil,
  };
}
