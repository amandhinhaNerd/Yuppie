import styles from './Catalogo.module.css';

export default function Catalogo(props) {
  return (
  <div>
     <div className={styles.fundo}>
      <img className={styles.imagem} src={props.imagem} />
      <img className={styles.imagem2} src={props.imagem2} />
      <img className={styles.imagem3} src={props.imagem3} />
     </div>
  </div>
  );
}
