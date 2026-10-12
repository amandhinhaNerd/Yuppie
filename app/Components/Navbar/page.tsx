import styles from './Navbar.module.css';

export default function Navbar(props) {
  return (
    <div className={styles.menu}>
      <img src={props.imagem} alt="Imagem do Hero" />
      </div>
  );
}
