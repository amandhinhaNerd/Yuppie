import styles from './Navbar.module.css';

export default function Navbar(props) {
  return (
    <div className={styles.menu}>
      <img className={styles.imagem} src={props.imagem} alt="YuppieLogoFinal.png" />
      </div>
  );
}
