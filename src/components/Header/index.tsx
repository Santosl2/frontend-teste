import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";
import { Button } from "..";
import { RegisterModal } from "../Modal/RegisterModal";
import style from "./styles.module.scss";

export function Header() {
  const { toggleOpen, updateContent } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    updateContent(<RegisterModal />);
  }, []);

  return (
    <header className={style.header}>
      <nav>
        <div className={style.logo}>Healthy Food</div>
        <ul id={`${menuOpen && style.menuOpen}`}>
          <li>HEALTHY RECIPES</li>
          <li>BLOG</li>
          <li>JOIN</li>
          <li>
            <Button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: `smooth`,
                });
                toggleOpen();
                setMenuOpen(false);
              }}
            >
              REGISTER
            </Button>
          </li>
        </ul>

        <li id={style.responsive} onClick={() => setMenuOpen((prev) => !prev)}>
          <Bars isOpen={menuOpen} />
        </li>
      </nav>
    </header>
  );
}

type Props = {
  isOpen: boolean;
};

export function Bars({ isOpen }: Props) {
  return (
    <div className={`${style.barsContainer} ${isOpen && style.menuOpen}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
