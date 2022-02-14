import style from "./styles.module.scss";
import Image from "next/image";
import { BlogPost } from "@/interface/BlogPost";

type Props = {
  data: BlogPost;
};

export function Blog({ data }: Props) {
  return (
    <article className={style.blog}>
      <Image src={data.image} width="100%" height="270px" alt="Food Image" />

      <div className={style.blogInfo}>
        <div id={style.title}>
          <h1>{data.title}</h1>
          <p>
            <Image
              src={`/assets/author${data.id}.jpg`}
              width="50px"
              height="50px"
              alt="Food Image"
            />

            {data.author}
          </p>
        </div>
      </div>
    </article>
  );
}
