import { ref, computed } from "vue";
import {
  WindowSetDarkTheme,
  WindowSetLightTheme,
  WindowSetSystemDefaultTheme,
  WindowSetBackgroundColour,
} from "../../wailsjs/runtime/runtime";
import { isWailsRuntime } from "../utils/wails";

export type AppTheme = "dark" | "light" | "system";

function getInitialTheme(): string {
  if (typeof document !== "undefined") {
    const domTheme = document.documentElement.getAttribute("data-theme");
    if (domTheme === "light" || domTheme === "dark") {
      return domTheme;
    }
  }

  try {
    const cached = localStorage.getItem("unigo_theme_cache");
    if (cached) {
      return cached;
    }
  } catch (e) {
    // localStorage may be unavailable
  }

  return "dark";
}

const currentTheme = ref<string>(getInitialTheme());
const isDarkTheme = computed(() => {
  if (currentTheme.value === "system") {
    return (
      typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
  return currentTheme.value !== "light";
});

export function useTheme() {
  function applyTheme(themeName: string) {
    currentTheme.value = themeName;
    let applied = themeName;
    if (themeName === "system") {
      const isDark =
        typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      applied = isDark ? "dark" : "light";
    }
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", applied);
    }
    try {
      localStorage.setItem("unigo_theme_cache", themeName);
    } catch (e) {
      // localStorage may be unavailable
    }

    if (isWailsRuntime()) {
      try {
        if (themeName === "system") {
          WindowSetSystemDefaultTheme();
        } else if (applied === "dark") {
          WindowSetDarkTheme();
          WindowSetBackgroundColour(7, 10, 18, 255);
        } else {
          WindowSetLightTheme();
          WindowSetBackgroundColour(241, 245, 249, 255);
        }
      } catch (e) {
        console.warn("Failed to synchronize window theme:", e);
      }
    }
  }

  function toggleTheme(): string {
    const nextTheme = currentTheme.value === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    return nextTheme;
  }

  return {
    currentTheme,
    isDarkTheme,
    applyTheme,
    toggleTheme,
  };
}
