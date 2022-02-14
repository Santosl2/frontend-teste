import style from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
      </ul>
    </footer>
  );
}
