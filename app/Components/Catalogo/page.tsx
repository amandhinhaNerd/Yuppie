import styles from './Catalogo.module.css';
import Link from 'next/link';

export default function Catalogo(props) {
  return (
    <div>
      <div className={styles.fundo}>
        <img className={styles.imagem} src={props.imagem} />
        <img className={styles.imagem2} src={props.imagem2} />
        <img className={styles.imagem3} src={props.imagem3} />
        <img className={styles.imagem4} src={props.imagem4} />
        <img className={styles.imagem5} src={props.imagem5} />
        <Link href="/Tendencias">
          <img
            className={styles.imagem6}
            src={props.imagem6}
            alt="Tendências"
          />
        </Link>
        <img className={styles.imagem7} src={props.imagem7} />
        <img className={styles.imagem8} src={props.imagem8} />
        <img className={styles.imagem9} src={props.imagem9} />
        <img className={styles.imagem10} src={props.imagem10} />
      </div>
    </div>
  );
}
