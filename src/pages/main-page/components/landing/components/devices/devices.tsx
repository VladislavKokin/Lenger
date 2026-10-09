import styles from './devices.module.css'

export const Devices = () => {
  return (
    <section className={`${styles.container} ${styles.devices}`} id="devices" aria-labelledby="dev-h">
      <div className={styles.head}>
        <h2 id="dev-h">На телефоне, планшете и компьютере</h2>
        <p>
          Записывайте траты на ходу, а разбирайте бюджет на большом экране. Данные одни и те же —
          достаточно войти в свой аккаунт.
        </p>
        <div className={styles.chips}>
          <span>Работает в браузере</span>
          <span>Ничего не нужно устанавливать</span>
        </div>
      </div>
      <div className={styles.scene}>
        <div className={styles.desktop}>
          <img
            className={`${styles.shot} ${styles.onLight}`}
            src="/previews/light/desktop.svg"
            alt="Главная страница приложения на компьютере"
            width={962}
            height={622}
            loading="lazy"
          />
          <img
            className={`${styles.shot} ${styles.onDark}`}
            src="/previews/dark/desktop.svg"
            alt="Главная страница приложения на компьютере"
            width={962}
            height={622}
            loading="lazy"
          />
        </div>
        <div className={styles.tablet}>
          <img
            className={`${styles.shot} ${styles.onLight}`}
            src="/previews/light/tablet.svg"
            alt="Главная страница приложения на планшете"
            width={522}
            height={722}
            loading="lazy"
          />
          <img
            className={`${styles.shot} ${styles.onDark}`}
            src="/previews/dark/tablet.svg"
            alt="Главная страница приложения на планшете"
            width={522}
            height={722}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
