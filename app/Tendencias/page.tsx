import styles from './Tendencias.module.css';

export default function Tendencias() {
  return (
    <div className={styles.materia}>
      <img
        className={styles.imagem1}
        src="/path2.png"
      />

      <img
        className={styles.imagem2}
        src="/materia.png"
      />
    </div>
  );
}