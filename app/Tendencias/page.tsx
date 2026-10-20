import styles from './Tendencias.module.css';

export default function Tendencias() {
    return (
     <div className={styles.materia}>
        <img className={styles.imagem1} src={props.imagem1} />
        <img className={styles.imagem2} src={props.imagem2} />
     </div>
    );
  }