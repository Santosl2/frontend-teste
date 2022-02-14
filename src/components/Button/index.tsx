import { HTMLProps } from "react";
import style from "./styles.module.scss";

type Props = HTMLProps<HTMLButtonElement> & {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string;
  height?: string;
  colored?: boolean;
  cancelButton?: boolean;
};

export function Button({
  children,
  type,
  width,
  height,
  colored = false,
  cancelButton = false,
  ...props
}: Props) {
  return (
    <button
      type={type || "button"}
      className={`${style.button} ${colored && style.coloredBtn} ${
        cancelButton && style.cancelBtn
      }`}
      {...props}
      style={{
        width,
        height,
      }}
    >
      {children}
    </button>
  );
}
