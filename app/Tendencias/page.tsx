import styles from './Tendencias.module.css';

export default function Tendencias(props) {
    return (
     <div className={styles.materia}>
        <img className={styles.imagem1} src={props.imagem1} src="/path2.png" />
        <img className={styles.imagem2} src={props.imagem2} src="/MATERIAMATERIA.PNG"/>
     </div>
    );
  }