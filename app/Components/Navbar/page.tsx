import styles from './Navbar.module.css';

export default function Navbar(props) {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
      <img src={"public/YuppieLogoFinal.png"} className={styles.yuppie} />
        <img src={props.imagem} />
      </div>
      </div>
  );
}
