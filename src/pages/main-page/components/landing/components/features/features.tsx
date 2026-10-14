import styles from './features.module.css'

export const Features = () => {
  return (
    <section
      className={`container ${styles.features}`}
      id="features"
      aria-labelledby="feat-h"
    >
      <div className="section-head">
        <h2 className="section-title" id="feat-h">Всё для учёта — и ничего лишнего</h2>
        <p>Главное видно сразу на главной странице, остальное — в пару нажатий.</p>
      </div>
      <div className={styles.bento}>
        <article className={`${styles.feat} ${styles.analytics}`}>
          <div className={styles.featText}>
            <h3>Видно, куда уходят деньги</h3>
            <p>Расходы по категориям за месяц и доходы с расходами по месяцам.</p>
          </div>
          <img
            className={`${styles.vis} ${styles.onLight}`}
            src="/previews/light/analytics.svg"
            alt="Аналитика за сентябрь: расходы по категориям и доходы с расходами по месяцам"
            width={697}
            height={214}
            loading="lazy"
          />
          <img
            className={`${styles.vis} ${styles.onDark}`}
            src="/previews/dark/analytics.svg"
            alt="Аналитика за сентябрь: расходы по категориям и доходы с расходами по месяцам"
            width={697}
            height={214}
            loading="lazy"
          />
        </article>
        <article className={`${styles.feat} ${styles.operation}`}>
          <div className={styles.featText}>
            <h3>Запись за пару секунд</h3>
            <p>
              Сумма, счёт, категория и комментарий. Ошиблись — откройте операцию и исправьте или
              удалите.
            </p>
          </div>
          <img
            className={`${styles.vis} ${styles.onLight}`}
            src="/previews/light/operation.svg"
            alt=""
            width={315}
            height={585}
            loading="lazy"
          />
          <img
            className={`${styles.vis} ${styles.onDark}`}
            src="/previews/dark/operation.svg"
            alt=""
            width={315}
            height={585}
            loading="lazy"
          />
        </article>
        <article className={`${styles.feat} ${styles.accounts}`}>
          <div className={styles.featText}>
            <h3>Все счета в одном месте</h3>
            <p>Карта, наличные, вклад — у каждого свой тип, иконка и остаток.</p>
          </div>
          <img
            className={`${styles.vis} ${styles.onLight}`}
            src="/previews/light/accounts.svg"
            alt=""
            width={315}
            height={239}
            loading="lazy"
          />
          <img
            className={`${styles.vis} ${styles.onDark}`}
            src="/previews/dark/accounts.svg"
            alt=""
            width={315}
            height={239}
            loading="lazy"
          />
        </article>
        <article className={`${styles.feat} ${styles.categories}`}>
          <div className={styles.featText}>
            <h3>Свои категории</h3>
            <p>Для расходов и доходов — с названием и иконкой, которые вы выберете сами.</p>
          </div>
          <img
            className={`${styles.vis} ${styles.onLight}`}
            src="/previews/light/categories.svg"
            alt=""
            width={315}
            height={239}
            loading="lazy"
          />
          <img
            className={`${styles.vis} ${styles.onDark}`}
            src="/previews/dark/categories.svg"
            alt=""
            width={315}
            height={239}
            loading="lazy"
          />
        </article>
        <article className={`${styles.feat} ${styles.history}`}>
          <div className={styles.featText}>
            <h3>История с фильтрами</h3>
            <p>
              Ищите операции по датам, счетам и категориям. Длинный список делится на страницы, а
              любую запись можно изменить или удалить.
            </p>
          </div>
          <img
            className={`${styles.vis} ${styles.onLight}`}
            src="/previews/light/history.svg"
            alt=""
            width={695}
            height={266}
            loading="lazy"
          />
          <img
            className={`${styles.vis} ${styles.onDark}`}
            src="/previews/dark/history.svg"
            alt=""
            width={695}
            height={266}
            loading="lazy"
          />
        </article>
        <article className={`${styles.feat} ${styles.themes}`}>
          <div className={styles.featText}>
            <h3>Светлая и тёмная тема</h3>
            <p>Переключаются в настройках — удобно и днём, и ночью.</p>
          </div>
          <img
            className={`${styles.vis} ${styles.onLight}`}
            src="/previews/light/themes.svg"
            alt=""
            width={315}
            height={288}
            loading="lazy"
          />
          <img
            className={`${styles.vis} ${styles.onDark}`}
            src="/previews/dark/themes.svg"
            alt=""
            width={315}
            height={288}
            loading="lazy"
          />
        </article>
      </div>
    </section>
  )
}
