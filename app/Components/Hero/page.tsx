import styles from './Hero.module.css';
import logo from 'YuppieLogoFinal.png';

export default function Hero (props) {
    return (
    <div className={styles.linha}>
       <img src={"public/YuppieLogoFinal.png"} className={styles.yuppie} />
    </div>
    );
  }