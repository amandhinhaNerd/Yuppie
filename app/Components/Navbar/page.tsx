import styles from './Navbar.module.css';

export default function Navbar(props) {
  return (
    <div className={styles.menu}>
      <img className={styles.imagem} src={props.imagem} alt="YuppieLogoFinal.png" />
      <div>
      <p className={styles.texto}>{props.home}</p>
      <p className={styles.texto}>{props.sobre}</p>
      <p className={styles.texto}>{props.materia}</p>
      <img className={styles.imagem2} src={props.imagem2} alt="Lupa" />
      </div>
    </div>
  );
}
