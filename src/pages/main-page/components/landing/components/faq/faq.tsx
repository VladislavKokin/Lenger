import styles from './faq.module.css'

export const Faq = () => {
  return (
    <section className={`${styles.container} ${styles.faq}`} id="faq" aria-labelledby="faq-h">
      <div className={styles.grid}>
        <div className={styles.head}>
          <h2 id="faq-h">Вопросы</h2>
          <p>Коротко о главном.</p>
        </div>
        <div className={styles.list}>
          <details className={styles.item}>
            <summary>
              Нужно ли подключать банковскую карту?
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <p>
              Нет. Операции вы записываете сами — приложение не подключается к банку и не просит
              данные карты.
            </p>
          </details>
          <details className={styles.item}>
            <summary>
              Можно ли завести свои категории?
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <p>
              Да. У категории есть название, тип — расход или доход — и иконка, которую вы
              выбираете сами.
            </p>
          </details>
          <details className={styles.item}>
            <summary>
              Можно ли исправить или удалить запись?
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <p>
              Да. Любую операцию можно открыть, изменить или удалить. Счета и категории
              редактируются так же.
            </p>
          </details>
          <details className={styles.item}>
            <summary>
              Как найти старую операцию?
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <p>
              Откройте историю и отфильтруйте операции по датам, счетам или категориям. Длинный
              список делится на страницы.
            </p>
          </details>
          <details className={styles.item}>
            <summary>
              Работает ли на телефоне?
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <p>
              Да. Страница подстраивается под телефон, планшет и компьютер, а данные одни и те же
              на всех устройствах.
            </p>
          </details>
          <details className={styles.item}>
            <summary>
              Как поменять имя или почту?
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <p>В настройках профиля.</p>
          </details>
        </div>
      </div>
    </section>
  )
}
