import { useModal } from "@/hooks/useModal";
import { BaseSyntheticEvent, useEffect } from "react";
import style from "./styles.module.scss";

type Props = {
  isOpen: boolean;
  content: React.ReactNode;
};

export function Modal({ isOpen, content }: Props) {
  const { toggleOpen } = useModal();

  return (
    <>
      {isOpen && (
        <div
          className={style.modal}
          onClick={(e: BaseSyntheticEvent) => {
            if (e.target.className === style.modal) {
              toggleOpen();
            }
          }}
        >
          <div className={style.modalContent}>{content}</div>
        </div>
      )}
    </>
  );
}
