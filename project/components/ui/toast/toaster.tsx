"use client";

import { useToastContext } from "./toast-context";
import { Toast } from "./toast";

export function Toaster() {
  const { toasts } = useToastContext();

  return (
    <div className="fixed bottom-0 right-0 z-50 w-full md:max-w-[420px] p-4 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}