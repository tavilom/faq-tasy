
export function normalizarSetor(valor?: string): string {
  return String(valor ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[\s-]+/g, "_")
    .trim();
}

export function isSetorTI(setor?: string): boolean {
  const s = normalizarSetor(setor);
  const candidatos = new Set([
    "tecnologia_da_informacao",
    "ti",
    "tecnologia_informacao",
    "tecnologia_da_informacao_ti",
  ]);
  return s.length > 0 && (candidatos.has(s) || s.includes("tecnologia_da_informacao"));
}
