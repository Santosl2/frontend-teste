import { Form } from "@/components/Form";
import style from "./styles.module.scss";

export function Join() {
  return (
    <section className={style.joinOur}>
      <div className={style.joinOurContent}>
        <h1>
          Join our membership <br /> to get special offer
        </h1>
        <Form placeholder="Enter your email address" submitText="Join" />
      </div>
    </section>
  );
}
