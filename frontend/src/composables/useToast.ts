import { ref } from "vue";

export function useToast() {
  const toastMessage = ref("");
  const toastType = ref<"info" | "success" | "warning" | "error">("info");
  let toastTimer: any = null;

  function showToast(msg: string, type: "info" | "success" | "warning" | "error" = "info") {
    toastMessage.value = msg;
    toastType.value = type;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastMessage.value = "";
    }, 4000);
  }

  function dismissToast() {
    toastMessage.value = "";
    if (toastTimer) clearTimeout(toastTimer);
  }

  return {
    toastMessage,
    toastType,
    showToast,
    dismissToast,
  };
}
