import { Recipe, Title } from "@/components";
import { fakeRecipes } from "@/data/FakeRecipes";
import style from "./styles.module.scss";

export function OurBestRecipes() {
  return (
    <section className={style.bestRecipes}>
      <div className={style.content}>
        <Title>
          <h1>Our Best Recipes</h1>
          <p>
            Far far away, behind the word mountains, far from the countries{" "}
            <br /> Vokalia and Consonantia, there live the blind texts.
          </p>
        </Title>

        <div className={style.recipesListContent}>
          {fakeRecipes.map((recipes) => {
            return (
              <Recipe
                key={recipes.id}
                title={recipes.title}
                image={recipes.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
