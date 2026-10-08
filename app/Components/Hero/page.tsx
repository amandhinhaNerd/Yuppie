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
        <h1>Bem-vindo à Yuppie!</h1>
        <p>Encontre tudo o que você precisa.</p>
        <button>Saiba mais</button>
      </div>
    </>
  );
}