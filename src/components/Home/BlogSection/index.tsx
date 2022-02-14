import { Title } from "@/components";
import { Blog } from "@/components/Blog";
import { fakeBlogPosts } from "@/data/FakeBlogPosts";
import style from "./styles.module.scss";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useRef } from "react";

enum Position {
  LEFT,
  RIGHT,
}

const scrollSize = 180;

export function BlogSection() {
  const blogListRef = useRef<HTMLDivElement>(null);

  const handleClickButton = (type: Position) => {
    const { current: blogListContainer } = blogListRef;

    if (blogListContainer) {
      switch (type) {
        case Position.LEFT:
          blogListContainer.scrollLeft -= scrollSize;

          break;

        case Position.RIGHT:
          blogListContainer.scrollLeft += scrollSize;
          break;
      }
    }
  };

  return (
    <section className={style.blog}>
      <div className={style.content}>
        <Title>
          <h1>Read Our Blog</h1>
          <p>
            Far far away, behind the word mountains, far from the countries{" "}
            <br /> Vokalia and Consonantia, there live the blind texts.
          </p>
        </Title>

        <div id={style.blogListContainer}>
          <div className={style.blogListContent} ref={blogListRef}>
            <div className={`${style.arrow} ${style.left}`}>
              <button onClick={() => handleClickButton(Position.LEFT)}>
                <AiOutlineArrowLeft size={27} />
              </button>
            </div>

            {fakeBlogPosts.map((posts) => {
              return <Blog key={posts.id} data={posts} />;
            })}
            <div className={style.arrow}>
              <button onClick={() => handleClickButton(Position.RIGHT)}>
                <AiOutlineArrowRight size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
