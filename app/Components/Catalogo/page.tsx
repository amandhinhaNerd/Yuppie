import styles from './Catalogo.module.css';

export default function Catalogo(props) {
  return (
  <div>
     <div className={styles.fundo}>
      <img className={styles.imagem} src={props.imagem} />
     </div>
  </div>
  );
}
