import { HTMLProps } from "react";
import style from "./styles.module.scss";

type Props = HTMLProps<HTMLInputElement> & {
  withError?: boolean;
};

export function Input({ withError, ...props }: Props) {
  return (
    <input
      className={`${style.input} ${withError && style.withError}`}
      {...props}
    />
  );
}
