import style from "./styles.module.scss";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { Button, Form, Input } from "@/components";

export function BannerHero() {
  return (
    <section className={style.bannerHero}>
      <div className={style.leftContent}>
        <h1>
          Ready for <br /> Trying a new <br />
          recipe?
        </h1>

        <Form placeholder="Search healthy recipes" submitText={<FiSearch />} />
      </div>

      <div className={style.rightContent}>
        <Image
          src="http://localhost:3000/assets/Illustration.svg"
          alt="Banner Hero "
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
    </section>
  );
}
