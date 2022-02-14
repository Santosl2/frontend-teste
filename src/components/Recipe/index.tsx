import { RecipeProps } from "@/interface/Recipe";
import style from "./styles.module.scss";
import Image from "next/image";
import { Button } from "@/components";

export function Recipe({ title, image }: RecipeProps) {
  return (
    <article className={style.recipe}>
      <Image src={image} width="100%" height="240px" alt="Food Image" />

      <div className={style.recipeInfo}>
        <div id={style.title}>
          <h1>{title}</h1>
        </div>
        <Button colored>See recipe</Button>
      </div>
    </article>
  );
}
