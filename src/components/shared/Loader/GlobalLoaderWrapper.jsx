"use client";

import { useLoader } from "@/context/LoaderContext";
import GlobalLoader from "./GlobalLoader";

export default function GlobalLoaderWrapper() {
  const { loading } = useLoader();

  return <GlobalLoader loading={loading} />;
}