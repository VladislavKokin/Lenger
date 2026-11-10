import styles from './kpis.module.css'

export const Kpis = () => {
    return (
        <section className={styles.kpis} aria-label="Сводные показатели">
            <article className={`${styles.kpi} ${styles.balance}`}>
                <span className={styles.label}>Баланс на всех счетах</span>
                <span className={styles.value}>84&nbsp;250&nbsp;₽</span>
            </article>
            <article className={styles.kpi}>
                <span className={styles.label}>Доходы в сентябре</span>
                <span className={styles.value}>62&nbsp;000&nbsp;₽</span>
            </article>
            <article className={styles.kpi}>
                <span className={styles.label}>Расходы в сентябре</span>
                <span className={styles.value}>25&nbsp;899&nbsp;₽</span>
            </article>
            <article className={`${styles.kpi} ${styles.forecast}`}>
                <span className={styles.label}>Останется к концу месяца</span>
                <span className={styles.value}>≈&nbsp;25&nbsp;570&nbsp;₽</span>
            </article>
        </section>
    )
}