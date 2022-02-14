import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

export function useModal() {
  const ctx = useContext(ModalContext);

  return ctx;
}
