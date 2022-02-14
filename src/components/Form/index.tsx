import { Button, Input } from "..";
import style from "./styles.module.scss";

type Props = {
  placeholder: string;
  submitText: string | React.ReactNode;
};

export function Form({ placeholder, submitText }: Props) {
  return (
    <div className={style.form}>
      <Input placeholder={placeholder} />
      <Button colored>{submitText}</Button>
    </div>
  );
}
