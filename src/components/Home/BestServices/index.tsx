import { Button } from "@/components";
import style from "./styles.module.scss";

export function BestServices() {
  return (
    <section className={style.bestServices}>
      <div className={style.bestServicesContent}>
        <h1>The best services ready To serve you</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
          <br />
          <br />
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
          <br />
          <br /> A small river named Duden flows by their place and supplies it
          with the necessary regelialia.
        </p>

        <Button colored>Know More</Button>
      </div>
    </section>
  );
}
