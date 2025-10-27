import React from "react";
import { MainLayout } from "@/modules/main/layouts/MainLayout";

const AdicionarFaq = React.lazy(() => import("@/modules/main/components/AdicionarFaq"))
const Inicial = React.lazy(() => import("@/modules/main/pages/PagePrincipal"))

export const HomeRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Inicial /> },
      { path: "faq/adicionar", element: <AdicionarFaq />}
    ],
  },
];

