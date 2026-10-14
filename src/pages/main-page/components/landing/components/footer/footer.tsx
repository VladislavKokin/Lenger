import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <a className={styles.logo} href="#top">
        <i>₽</i>Мои финансы
      </a>
      <nav className={styles.nav} aria-label="Ссылки в подвале">
        <a href="#features">Возможности</a>
        <a href="#how">Как начать</a>
        <a href="#devices">Устройства</a>
        <a href="#faq">Вопросы</a>
      </nav>
      <small className={styles.note}>Дипломный проект Result-University · 2026</small>
    </footer>
  )
}
