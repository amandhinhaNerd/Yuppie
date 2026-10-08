import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <div className={styles.linha}>
        <img
          src="/YuppieLogoFinal.png"
          className={styles.yuppie}
          alt="Yuppie"
        />
      </div>

      <div className={styles.banner}>
      </div>
    </>
  );
}