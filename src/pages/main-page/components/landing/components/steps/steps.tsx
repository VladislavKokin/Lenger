import styles from './steps.module.css'

export const Steps = () => {
  return (
    <section className={`${styles.container} ${styles.steps}`} id="how" aria-labelledby="how-h">
      <div className={styles.head}>
        <h2 id="how-h">Как начать</h2>
        <p>Три шага — и учёт уже идёт.</p>
      </div>
      <ol className={styles.list}>
        <li>
          <span className={styles.num} aria-hidden="true">1</span>
          <h3>Создайте аккаунт</h3>
          <p>Нужны только почта и пароль.</p>
        </li>
        <li>
          <span className={styles.num} aria-hidden="true">2</span>
          <h3>Добавьте счета</h3>
          <p>Карту, наличные, вклад — с остатком на сегодня.</p>
        </li>
        <li>
          <span className={styles.num} aria-hidden="true">3</span>
          <h3>Записывайте операции</h3>
          <p>Каждую трату и каждый доход. Графики построятся сами.</p>
        </li>
      </ol>
    </section>
  )
}
