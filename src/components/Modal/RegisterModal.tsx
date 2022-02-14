import { useModal } from "@/hooks/useModal";
import { api } from "@/services/CEP";
import { setCookie } from "nookies";
import { BaseSyntheticEvent, FormEvent, useRef, useState } from "react";
import { Button, Input, Spinner } from "..";
import style from "./styles.module.scss";

type ResponseProps = {
  bairro: string;
  localidade: string;
  logradouro: string;
  uf: string;
  erro?: boolean;
};

type InputFormEvent = FormEvent<HTMLInputElement> & {
  target: {
    value: string;
  };
};

type FormRefProps = HTMLFormElement & {
  name: HTMLInputElement;
  email: HTMLInputElement;
  data: HTMLDataElement;
  cpf: HTMLInputElement;
  cep: HTMLInputElement;
  district: HTMLInputElement;
  city: HTMLInputElement;
  street: HTMLInputElement;
};

type ErrorsProps = {
  id?: number;
  message: string;
  fieldName: string;
};

type FormProps = {
  name: string;
  email: string;
  data: string;
  cpf: string;
  cep: string;
  district: string;
  city: string;
  street: string;
};

export function RegisterModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorsProps[]>([{}] as ErrorsProps[]);

  const { toggleOpen } = useModal();
  const formRef = useRef<FormRefProps>(null);

  const hasErrors = (fieldName?: string) => {
    return fieldName
      ? errors.some((el) => el.fieldName === fieldName)
      : errors.length - 1 > 0;
  };

  const removeErrors = (fieldName: string) => {
    if (hasErrors(fieldName)) {
      setErrors((prev) => prev.filter((el) => el.fieldName !== fieldName));
    }
  };

  const saveData = (data: any[]) => {
    const localStorageItems: any[] = [];

    data?.forEach((el) => {
      localStorageItems.push(el[0]);
    });

    const saveDataStr = JSON.stringify(localStorageItems);

    localStorage.setItem("@healthy-data", saveDataStr);

    setCookie(null, "@healthy-data", saveDataStr, {
      maxAge: 3600, // 1 hour
      path: "/",
    });
  };

  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const inputs = formRef.current?.querySelectorAll("input");
    const data: any[] = [];

    inputs?.forEach((element) => {
      const { value, minLength } = element;

      if (value.trim().length <= 0) {
        if (!hasErrors(element.name)) {
          setErrors((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              fieldName: element.name,
              message: `${element.name} is null, please insert an value`,
            },
          ]);
        }

        return;
      }

      if (minLength > 0 && value.length < element.minLength) {
        if (!hasErrors(element.name)) {
          setErrors((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              fieldName: element.name,
              message: `${element.name} need at least ${element.minLength} characters`,
            },
          ]);
        }

        return;
      }

      removeErrors(element.name);

      data.push([
        {
          [element.name]: value,
        },
      ]);
    });

    setIsLoading(false);
    saveData(data);

    // Success ! Save
    if (data.length >= 8) {
      alert("Welcome!");
      toggleOpen();
    }
  };

  const getUserLocationByCEP = async (data: string) => {
    const cep = data.replace(/\D/g, "");

    if (!cep) return;

    const { district, city, street } = formRef.current as FormRefProps;

    try {
      const { data: userLocationData } = await api.get<ResponseProps>(
        `${cep}/json/`
      );

      if (userLocationData.erro) return;

      district.value = userLocationData.bairro;
      street.value = userLocationData.logradouro;
      city.value = `${userLocationData.localidade}-${userLocationData.uf}`;
    } catch {
      console.log("Error");
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={onSubmit} ref={formRef}>
        <Input
          placeholder="Name *"
          name="name"
          withError={hasErrors("name")}
          required
        />

        <Input
          placeholder="E-mail *"
          name="email"
          type="email"
          withError={hasErrors("email")}
          required
        />
        <Input
          name="date"
          type="date"
          withError={hasErrors("date")}
          max="2020-12-31"
          required
        />
        <Input
          placeholder="CPF *"
          name="cpf"
          minLength={14}
          maxLength={14}
          onChange={(e: InputFormEvent) =>
            (e.target.value = e.target.value
              .replace(/\D/g, "")
              .replace(/(\d{3})(\d)/, "$1.$2")
              .replace(/(\d{3})(\d)/, "$1.$2")
              .replace(/(\d{3})(\d{1,2})/, "$1-$2")
              .replace(/(-\d{2})\d+?$/, "$1"))
          }
          withError={hasErrors("cpf")}
          required
        />
        <Input
          placeholder="CEP *"
          id={style.cep}
          name="cep"
          minLength={9}
          maxLength={9}
          onChange={(e: InputFormEvent) => {
            e.target.value = e.target.value
              .replace(/\D/g, "")
              .replace(/(\d{5})(\d)/, "$1-$2")
              .replace(/(-\d{3})\d+?$/, "$1");
          }}
          onBlur={(e) => {
            getUserLocationByCEP(e.target.value);
          }}
          withError={hasErrors("cep")}
          required
        />
        <div id={style.groupInputs}>
          <Input
            placeholder="Street *"
            name="street"
            withError={hasErrors("street")}
            required
          />
          <Input
            placeholder="District *"
            name="district"
            withError={hasErrors("district")}
            required
          />
          <Input
            placeholder="City *"
            name="city"
            withError={hasErrors("city")}
            required
          />

          <div id={style.column}>
            {" "}
            {errors.map((erro) => {
              return <small key={erro.id}>{erro.message}</small>;
            })}
          </div>
        </div>

        <div id={style.modalRegisterFooter}>
          <Button type="submit" colored>
            {isLoading ? <Spinner /> : "Register"}
          </Button>
          <Button colored cancelButton onClick={toggleOpen}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
