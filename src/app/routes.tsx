import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Manifesto } from "./pages/Manifesto";
import { Playground } from "./pages/Playground";
import { CaseStudy } from "./pages/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "manifesto", Component: Manifesto },
      { path: "playground", Component: Playground },
      { path: "case-study/:id", Component: CaseStudy },
      { path: "work/:id", Component: CaseStudy },
    ],
  },
]);
