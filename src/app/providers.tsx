"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    darkModeInit();
    setInit(true);
  }, []);

  if (init) {
    return <NextUIProvider>{children}</NextUIProvider>;
  }
}

function darkModeInit() {
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle("dark", shouldAdd);
  };

  const initializeDarkTheme = async () => {
    const storedDarkMode = await localStorage.getItem("dark-mode");
    if (storedDarkMode !== null) {
      toggleDarkTheme(storedDarkMode === "true");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      const initialDarkMode = prefersDark.matches;
      toggleDarkTheme(initialDarkMode);
      await localStorage.setItem("dark-mode", initialDarkMode.toString());
    }
  };

  initializeDarkTheme();
}
