"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLoader } from "@/context/LoaderContext";

export default function RouteLoader({ children }) {
  const pathname = usePathname();
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, setLoading]);

  return children;
}