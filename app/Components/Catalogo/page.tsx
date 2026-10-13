import styles from './Catalogo.module.css';

export default function Catalogo(props) {
  return (
  <div>
     <div className={styles.fundo}>
      <img className={styles.textoamarelinho} src={props.textoamarelinho} alt="LAVOISIER.png" />
     </div>
  </div>
  );
}
