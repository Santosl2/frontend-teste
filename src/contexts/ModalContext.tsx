import { Modal } from "@/components/Modal";
import React, { createContext, useCallback, useEffect, useState } from "react";

type ModalContextProps = {
  isOpen: boolean;
  updateContent: (e: React.ReactNode) => void;
  toggleOpen: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext({} as ModalContextProps);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const updateContent = useCallback((e: React.ReactNode) => {
    setContent(e);
  }, []);

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    const overflow = isOpen ? "hidden" : "auto";

    if (bodyElement) {
      bodyElement.style.overflow = overflow;
    }
  }, [isOpen]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        updateContent,
        toggleOpen,
      }}
    >
      {children}

      <Modal isOpen={isOpen} content={content} />
    </ModalContext.Provider>
  );
}
