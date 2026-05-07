import styles from './Navbar.module.css';

export default function Navbar(props) {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <img src={props.imagem} />
      </div>
      <div className={styles.caixaTexto}>
        <p className={styles.texto}>{props.inicio}</p>
        <p className={styles.texto}>{props.portifolio}</p>
        <p className={styles.texto}>{props.integrantes}</p>
        <p className={styles.texto}>{props.contatos}</p>
      </div>
    </div>
  );
}
