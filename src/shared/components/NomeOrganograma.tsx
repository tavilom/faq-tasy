import React, { useEffect, useMemo, useState, useContext } from "react";
import { AuthContext } from "@/stores/AuthContext";

type AnyObj = Record<string, any>;

type CentroCusto = {
  id?: number | string;
  nome?: string;
  nome_totvs?: string;
  nome_organograma?: string | null;
  nomeOrganograma?: string | null;
  codigo_centro_custo?: string;
  codigoCentroCusto?: string;
  area_id?: number | string;
  setor_id?: number | string;
  codigo?: string | number;
  sigla?: string;
  [k: string]: any;
};

type Setor = {
  id?: number | string;
  codigo?: string | number;
  nome?: string;
  sigla?: string;
  nome_organograma?: string | null;
  [k: string]: any;
};

type Colaborador = {
  id?: number | string;
  nome?: string;
  centro_custo_id?: string | number | (string | number)[] | null; // no seu schema é String?
  ws_id?: string | number | null;
  [k: string]: any;
};

export type NomeOrganogramaProps = {
  solicitante?: any;
  centroCusto?: any; // string | objeto | array
  hints?: Array<string | number | null | undefined>;
  centrosEndpoint?: string;
  setoresEndpoint?: string;
  /** NOVO: endpoint que retorna colaboradores (para filtrar pelos ws_ids) */
  colaboradoresEndpoint?: string;
  fetchOnFallback?: boolean;
  fallbackText?: string;
  debug?: boolean;
};

const BASE_API =
  (import.meta as any)?.env?.VITE_API_BASE ?? "http://localhost:9923/api";
const DEFAULT_CENTROS = `${BASE_API}/organograma/centros`;
const DEFAULT_SETORES = `${BASE_API}/organograma/setores`;
// ajuste se o seu backend usar outro caminho:
const DEFAULT_COLABS = `${BASE_API}/organograma/colaboradores`;

const PLACEHOLDERS = new Set(["", "-", "--", "---", "n/a", "na", "null", "undefined"]);

const normalizeLoose = (s: unknown) =>
  String(s ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const toSlug = (s: unknown) => normalizeLoose(s).replace(/\s+/g, "");
const toTokens = (s: unknown) => normalizeLoose(s).split(" ").filter(Boolean);

function similarity(a: string, b: string): number {
  const sa = toSlug(a), sb = toSlug(b);
  if (!sa || !sb) return 0;
  if (sa.includes(sb) || sb.includes(sa)) {
    const ratio = Math.min(sa.length, sb.length) / Math.max(sa.length, sb.length);
    return Math.max(0.6, ratio);
  }
  const A = new Set(toTokens(a));
  const B = new Set(toTokens(b));
  const inter = new Set([...A].filter((x) => B.has(x)));
  const union = new Set([...A, ...B]);
  if (union.size === 0) return 0;
  return inter.size / union.size;
}

const getPath = (obj: AnyObj, path: string) =>
  path.split(".").reduce((o: any, k) => (o == null ? o : o[k]), obj);

async function fetchJSON<T>(url: string, init?: RequestInit) {
  const res = await fetch(url, init);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Erro ${res.status}`);
  }
  return (await res.json()) as T;
}

/* ====== helpers para ws_id do AuthContext e fallback localStorage ====== */

function normalizeIds(value: any): string[] {
  if (value == null) return [];
  if (Array.isArray(value)) {
    return value
      .map((x) => (x && typeof x === "object" && "id" in x ? (x as any).id : x))
      .map((x) => String(x).trim())
      .filter(Boolean);
  }
  if (typeof value === "object") {
    if ("id" in value && (value as any).id != null) {
      const v = String((value as any).id).trim();
      return v ? [v] : [];
    }
    const keys = ["ws_id", "workspace_id", "wsIds", "ws_ids", "workspaces", "workspace_ids"];
    for (const k of keys) {
      if ((value as any)[k] != null) return normalizeIds((value as any)[k]);
    }
    return [];
  }
  const raw = String(value);
  try {
    const parsed = JSON.parse(raw);
    return normalizeIds(parsed);
  } catch {
    return raw
      .split(/[,\s]+/)
      .map((x) => x.trim())
      .filter(Boolean);
  }
}

function getWsIdsFromAuthContext(perfil: any): string[] {
  if (!perfil) return [];
  const candidates = [
    "ws_id", "ws_ids",
    "workspace_id", "workspace_ids",
    "workspaces", "workspaces_ids",
  ];
  const out = new Set<string>();
  for (const k of candidates) {
    if (perfil[k] != null) {
      for (const v of normalizeIds(perfil[k])) out.add(v);
    }
  }
  return Array.from(out);
}

function readIdsFromStringish(raw: any): string[] {
  if (raw == null) return [];
  try {
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    return normalizeIds(parsed);
  } catch {
    return String(raw)
      .split(/[,\s]+/)
      .map((x) => x.trim())
      .filter(Boolean);
  }
}

function getWsIdsFromLocalStorage(): string[] {
  const keys = ["ws_id", "ws_ids", "workspace_id", "workspace_ids"];
  const out = new Set<string>();
  for (const k of keys) {
    const raw = typeof localStorage !== "undefined" ? localStorage.getItem(k) : null;
    if (raw) for (const v of readIdsFromStringish(raw)) out.add(v);
  }
  return Array.from(out);
}

/** ========= montar URL com vários ws_id e workspace_id ========= */
function withQueryParams(
  base: string,
  params: Record<string, string[] | string | undefined>
) {
  const [baseNoQuery, existingQuery] = base.split("?");
  const url = new URL(
    baseNoQuery,
    typeof window !== "undefined" ? window.location.origin : "http://localhost"
  );
  if (existingQuery) {
    new URLSearchParams(existingQuery).forEach((v, k) =>
      url.searchParams.append(k, v)
    );
  }
  Object.entries(params).forEach(([k, v]) => {
    if (Array.isArray(v)) v.forEach((vv) => url.searchParams.append(k, vv));
    else if (v != null) url.searchParams.set(k, v);
  });
  return url.toString();
}


const centrosCacheByKey = new Map<string, CentroCusto[]>();
const centrosPromiseByKey = new Map<string, Promise<CentroCusto[]>>();
const setoresCacheByKey = new Map<string, Setor[]>();
const setoresPromiseByKey = new Map<string, Promise<Setor[]>>();
const colabsCacheByKey = new Map<string, Colaborador[]>();
const colabsPromiseByKey = new Map<string, Promise<Colaborador[]>>();



async function getCentrosOnce(
  endpoint: string,
  wsIds: string[],
  debug?: boolean
): Promise<CentroCusto[]> {
  const url = withQueryParams(endpoint, { ws_id: wsIds, workspace_id: wsIds });
  if (centrosCacheByKey.has(url)) return centrosCacheByKey.get(url)!;

  if (!centrosPromiseByKey.has(url)) {
    const headers: HeadersInit = {
      "X-WS-ID": wsIds.join(","),
      "X-Workspace-Id": wsIds.join(","),
    };
    const p = fetchJSON<CentroCusto[]>(url, { headers })
      .then((list) => Array.isArray(list) ? list : [])
      .finally(() => {
        centrosPromiseByKey.delete(url);
      });
    centrosPromiseByKey.set(url, p);
  }
  return centrosPromiseByKey.get(url)!;
}

async function getSetoresOnce(
  endpoint: string,
  wsIds: string[],
  debug?: boolean
): Promise<Setor[]> {
  const url = withQueryParams(endpoint, { ws_id: wsIds, workspace_id: wsIds });
  if (setoresCacheByKey.has(url)) return setoresCacheByKey.get(url)!;

  if (!setoresPromiseByKey.has(url)) {
    const headers: HeadersInit = {
      "X-WS-ID": wsIds.join(","),
      "X-Workspace-Id": wsIds.join(","),
    };
    const p = fetchJSON<Setor[]>(url, { headers })
      .then((list) => Array.isArray(list) ? list : [])
      .finally(() => {
        setoresPromiseByKey.delete(url);
      });
    setoresPromiseByKey.set(url, p);
  }
  return setoresPromiseByKey.get(url)!;
}

async function getColabsOnce(
  endpoint: string,
  wsIds: string[],
  debug?: boolean
): Promise<Colaborador[]> {
  const url = withQueryParams(endpoint, { ws_id: wsIds, workspace_id: wsIds });
  if (colabsCacheByKey.has(url)) return colabsCacheByKey.get(url)!;

  if (!colabsPromiseByKey.has(url)) {
    const headers: HeadersInit = {
      "X-WS-ID": wsIds.join(","),
      "X-Workspace-Id": wsIds.join(","),
    };
    const p = fetchJSON<Colaborador[]>(url, { headers })
      .then((list) => Array.isArray(list) ? list : [])
      .finally(() => {
        colabsPromiseByKey.delete(url);
      });
    colabsPromiseByKey.set(url, p);
  }
  return colabsPromiseByKey.get(url)!;
}

/* ====== helpers de texto ====== */

const pickCentroNomeOrganograma = (c?: CentroCusto): string | undefined => {
  const v = (c?.nome_organograma ?? c?.nomeOrganograma) as string | null | undefined;
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
};

const asArray = <T,>(x: T | T[] | null | undefined): T[] =>
  x == null ? [] : Array.isArray(x) ? x : [x];

const uniq = <T,>(arr: T[], key = (v: T) => String(v)): T[] => {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const v of arr) {
    const k = key(v);
    if (!seen.has(k)) {
      seen.add(k);
      out.push(v);
    }
  }
  return out;
};

function pickDirectFromSolicitanteCentroAll(s: any): string[] {
  if (!s || typeof s !== "object") return [];
  const candidates = ["centro_custo", "centro", "centroCusto"];
  const out: string[] = [];
  for (const path of candidates) {
    const node = getPath(s, path);
    const list = asArray<any>(node);
    for (const item of list) {
      if (typeof item === "string") {
        const t = item.trim();
        if (t && !PLACEHOLDERS.has(t.toLowerCase())) out.push(t);
      } else if (item && typeof item === "object") {
        const n = pickCentroNomeOrganograma(item);
        if (n && !PLACEHOLDERS.has(n.toLowerCase())) out.push(n);
      }
    }
  }
  return uniq(out, (v) => v.toLowerCase());
}

function extractCentroKeys(cc: any) {
  const list = asArray<any>(cc);
  const names: string[] = [];
  const direct: string[] = [];

  let id: string | undefined;
  let codigo: string | undefined;

  for (const o of list) {
    if (typeof o === "string") {
      const s = o.trim();
      if (s && !PLACEHOLDERS.has(s.toLowerCase())) names.push(s);
      continue;
    }
    if (!o || typeof o !== "object") continue;

    if (id == null && o?.id != null) id = String(o.id);
    if (codigo == null) {
      codigo =
        o?.codigo_centro_custo != null
          ? String(o.codigo_centro_custo)
          : o?.codigoCentroCusto != null
          ? String(o.codigoCentroCusto)
          : o?.codigo != null
          ? String(o.codigo)
          : codigo;
    }

    const maybeNames = [
      o?.nome_organograma,
      o?.nomeOrganograma,
      o?.nome,
      o?.nome_totvs,
      o?.sigla,
    ];
    for (const n of maybeNames) {
      if (typeof n === "string") {
        const s = n.trim();
        if (s && !PLACEHOLDERS.has(s.toLowerCase())) names.push(s);
      }
    }

    const d = pickCentroNomeOrganograma(o);
    if (d && !PLACEHOLDERS.has(d.toLowerCase())) direct.push(d);
  }

  return {
    id,
    codigo,
    names: uniq(names, (v) => v.toLowerCase()),
    directNomeOrganogramaList: uniq(direct, (v) => v.toLowerCase()),
  };
}

function extractSolicitanteKeys(s: any) {
  if (!s || typeof s !== "object") {
    return { centroId: undefined as string | undefined, setorId: undefined as string | undefined, names: [] as string[] };
  }
  const centroId =
    s?.centro_custo_id != null
      ? String(s.centro_custo_id)
      : s?.centro_custo?.id != null
      ? String(s.centro_custo?.id)
      : s?.centro?.id != null
      ? String(s.centro?.id)
      : undefined;
  const setorId =
    s?.setor_id != null
      ? String(s.setor_id)
      : s?.setor?.id != null
      ? String(s.setor?.id)
      : undefined;

  const names: string[] = [];
  const maybe = [s?.centro_custo?.nome, s?.centro?.nome, s?.organograma?.nome, s?.setor?.nome];
  for (const n of maybe) {
    if (typeof n === "string") {
      const t = n.trim();
      if (t && !PLACEHOLDERS.has(t.toLowerCase())) names.push(t);
    }
  }

  return { centroId, setorId, names: uniq(names, (v) => v.toLowerCase()) };
}

function extractHintBuckets(hints?: Array<string | number | null | undefined>) {
  const ids: string[] = [];
  const codes: string[] = [];
  const names: string[] = [];
  for (const h of hints ?? []) {
    if (h == null) continue;
    const raw = String(h).trim();
    if (!raw || PLACEHOLDERS.has(raw.toLowerCase())) continue;
    if (/^\d+$/.test(raw)) ids.push(raw);
    else if (/[\d.]/.test(raw)) codes.push(raw);
    else names.push(raw);
  }
  return { ids: uniq(ids), codes: uniq(codes), names: uniq(names, (v) => v.toLowerCase()) };
}

/* ====== util: extrair IDs de centro a partir de colaboradores ====== */
function parseCentroIdsFromColabField(v: any): string[] {
  // pode vir "1", 1, "1,2,3", ["1","2"], etc.
  if (v == null) return [];
  if (Array.isArray(v)) return v.map(String).map((s) => s.trim()).filter(Boolean);
  const raw = String(v);
  return raw
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/* ===================== componente ===================== */

const NomeOrganograma: React.FC<NomeOrganogramaProps> = ({
  solicitante,
  centroCusto,
  hints,
  centrosEndpoint = DEFAULT_CENTROS,
  setoresEndpoint = DEFAULT_SETORES,
  colaboradoresEndpoint = DEFAULT_COLABS, // NOVO
  fetchOnFallback = true,
  fallbackText = "--",
  debug = false,
}) => {
  const auth = useContext(AuthContext);
  const perfil: any = auth?.perfil;

  const [centros, setCentros] = useState<CentroCusto[] | null>(null);
  const [setores, setSetores] = useState<Setor[] | null>(null);

  // NOVO: colaboradores do ws para filtrar centros
  const [colabs, setColabs] = useState<Colaborador[] | null>(null);

  const wsIds = useMemo(() => {
    const fromCtx = getWsIdsFromAuthContext(perfil);
    if (fromCtx.length) return fromCtx;
    return getWsIdsFromLocalStorage();
  }, [perfil]);

  const directFromSolicitanteList = useMemo(
    () => pickDirectFromSolicitanteCentroAll(solicitante),
    [solicitante]
  );

  const { id: ccId, codigo: ccCodigo, names: ccNames, directNomeOrganogramaList } =
    useMemo(() => extractCentroKeys(centroCusto), [centroCusto]);

  const sKeys = useMemo(() => extractSolicitanteKeys(solicitante), [solicitante]);
  const { ids: hintIds, codes: hintCodes, names: hintNames } = useMemo(
    () => extractHintBuckets(hints),
    [hints]
  );

  const hasMeaningfulDirect =
    directFromSolicitanteList.length > 0 || directNomeOrganogramaList.length > 0;

  // 1) carrega centros/setores/colabs (com ws_id)
  useEffect(() => {
    let active = true;
    if (!fetchOnFallback) return;
    if (hasMeaningfulDirect) return;

    (async () => {
      try {
        const [cList, sList, colList] = await Promise.all([
          getCentrosOnce(centrosEndpoint, wsIds, debug),
          getSetoresOnce(setoresEndpoint, wsIds, debug),
          getColabsOnce(colaboradoresEndpoint, wsIds, debug),
        ]);
        if (!active) return;

        // === NOVO: filtra centros pelos IDs presentes em colaboradores do ws ===
        const centroIdsFromColabs = new Set<string>();
        for (const col of colList ?? []) {
          const ids = parseCentroIdsFromColabField(col?.centro_custo_id);
          ids.forEach((id) => centroIdsFromColabs.add(String(id)));
        }

        const filteredCentros =
          centroIdsFromColabs.size > 0
            ? (cList ?? []).filter((c) => {
                const id = c?.id != null ? String(c.id) : "";
                return id && centroIdsFromColabs.has(id);
              })
            : (cList ?? []); // se não vierem colabs/ids, mantém como está

        setCentros(filteredCentros);
        setSetores(sList);
        setColabs(colList);

        if (debug) {
          console.log("[NomeOrganograma] loaded:", {
            wsIds,
            centrosBefore: cList?.length,
            centrosAfter: filteredCentros?.length,
            setores: sList?.length,
            colabs: colList?.length,
            amostraCentro: filteredCentros?.[0],
          });
        }
      } catch (e) {
        if (debug) console.warn("[NomeOrganograma] fetch error:", e);
        setCentros((prev) => prev ?? []);
        setSetores((prev) => prev ?? []);
        setColabs((prev) => prev ?? []);
      }
    })();

    return () => {
      active = false;
    };
  }, [
    hasMeaningfulDirect,
    fetchOnFallback,
    centrosEndpoint,
    setoresEndpoint,
    colaboradoresEndpoint,
    debug,
    wsIds.join("|"),
  ]);

  // helpers de busca
  const findCentroByIdOrCodigoMany = (ids: string[], codigos: string[]): CentroCusto[] => {
    if (!centros || centros.length === 0) return [];
    const idSet = new Set(ids);
    const codeSet = new Set(codigos);
    return centros.filter(
      (c) =>
        (c.id != null && idSet.has(String(c.id))) ||
        (c.codigo_centro_custo != null && codeSet.has(String(c.codigo_centro_custo))) ||
        (c.codigoCentroCusto != null && codeSet.has(String(c.codigoCentroCusto))) ||
        (c.codigo != null && codeSet.has(String(c.codigo)))
    );
  };

  const bestCentrosByNames = (names: string[]): CentroCusto[] => {
    if (!centros || centros.length === 0 || names.length === 0) return [];
    const scored = centros.map((c) => {
      const rep = c.nome_organograma || c.nomeOrganograma || c.nome || c.nome_totvs || c.sigla || "";
      let score = 0;
      for (const n of names) score = Math.max(score, similarity(rep, n));
      if (c.nome_organograma || c.nomeOrganograma) score += 0.05;
      return { c, score };
    });
    return scored
      .filter(({ score }) => score >= 0.45) // ajuste se quiser mais permissivo
      .sort((a, b) => b.score - a.score)
      .map((x) => x.c);
  };

  const findSetorByIdOrCodigoMany = (ids: string[], codigos: string[]): Setor[] => {
    if (!setores || setores.length === 0) return [];
    const idSet = new Set(ids);
    const codeSet = new Set(codigos);
    return setores.filter(
      (s) =>
        (s.id != null && idSet.has(String(s.id))) ||
        (s.codigo != null && codeSet.has(String(s.codigo)))
    );
  };

  const bestSetoresByNames = (names: string[]): Setor[] => {
    if (!setores || setores.length === 0 || names.length === 0) return [];
    const scored = setores.map((s) => {
      const rep = s.nome_organograma || s.nome || s.sigla || "";
      let score = 0;
      for (const n of names) score = Math.max(score, similarity(rep, n));
      return { s, score };
    });
    return scored
      .filter(({ score }) => score >= 0.45)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.s);
  };

  const centrosFromSetores = (setorIds: Array<string | number>): CentroCusto[] => {
    if (!centros || centros.length === 0) return [];
    const idSet = new Set(setorIds.map(String));
    const list = centros.filter((c) => c.setor_id != null && idSet.has(String(c.setor_id)));
    const withNome = list.filter((c) => pickCentroNomeOrganograma(c));
    return withNome.length ? withNome : list;
  };

  // ========== COLETA FINAL ==========
  const collected: string[] = [];
  collected.push(...directFromSolicitanteList);
  collected.push(...directNomeOrganogramaList);

  if (fetchOnFallback && !collected.length) {
    if (centros) {
      const idCandidates = uniq([sKeys.centroId, ccId, ...hintIds].filter(Boolean) as string[]);
      const codeCandidates = uniq([ccCodigo, ...hintCodes].filter(Boolean) as string[]);

      const byIdCodigo = findCentroByIdOrCodigoMany(idCandidates, codeCandidates);
      collected.push(...(byIdCodigo.map(pickCentroNomeOrganograma).filter(Boolean) as string[]));

      const namesPool = uniq([...sKeys.names, ...ccNames, ...hintNames], (v) => v.toLowerCase());
      const byNames = bestCentrosByNames(namesPool);
      collected.push(...(byNames.map(pickCentroNomeOrganograma).filter(Boolean) as string[]));
    }

    if (setores && centros) {
      const setorByIds = findSetorByIdOrCodigoMany(
        uniq([sKeys.setorId, ...hintIds].filter(Boolean) as string[]),
        hintCodes
      );
      let setorList = setorByIds;
      if (!setorList.length) {
        const namesPool = uniq([...sKeys.names, ...hintNames], (v) => v.toLowerCase());
        setorList = bestSetoresByNames(namesPool);
      }
      if (setorList.length) {
        const cList = centrosFromSetores(setorList.map((s) => s.id!));
        collected.push(...(cList.map(pickCentroNomeOrganograma).filter(Boolean) as string[]));
      }
    }
  }

  const finalList = uniq(
    collected.filter((v) => v && !PLACEHOLDERS.has(String(v).toLowerCase())),
    (v) => v.toLowerCase()
  );

  if (debug) {
    console.log("[NomeOrganograma] finalList:", finalList, {
      wsIds,
      centrosLoaded: !!centros?.length,
      setoresLoaded: !!setores?.length,
      colabsLoaded: !!colabs?.length,
    });
  }

  if (finalList.length === 0) {
    return <span data-empty="true">{fallbackText}</span>;
  }

  return <span>{finalList.join(" · ")}</span>;
};

export default React.memo(NomeOrganograma);
