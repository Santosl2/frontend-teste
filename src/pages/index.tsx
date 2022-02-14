import { Footer, Header } from "@/components";
import {
  BannerHero,
  BestServices,
  BlogSection,
  Join,
  OurBestRecipes,
} from "@/components/Home";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BannerHero />
      <OurBestRecipes />
      <BestServices />
      <BlogSection />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
