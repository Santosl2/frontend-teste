import style from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props) {
  return <div className={style.title}>{children}</div>;
}
