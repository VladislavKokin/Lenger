import styles from './kpis.module.css'
import w from '../widget.module.css'
import { ArrowUpIcon } from '../../../../../../../../../shared/ui/Icons/Icons'

export const Kpis = () => {
    return (
        <section className={styles.kpis} aria-label="Сводные показатели">
            <article className={`${styles.kpi} ${styles.balance}`}>
                <span className={styles.label}>Баланс на всех счетах</span>
                <span className={styles.value}>84&nbsp;250&nbsp;₽</span>
                <div className={styles.row}><span className={styles.chip}>+36&nbsp;101&nbsp;₽ с 1 сентября</span></div>
                <div className={styles.viz} role="img" aria-label="Баланс по дням сентября"></div>
            </article>
            <article className={styles.kpi}>
                <span className={styles.label}>Доходы в сентябре</span>
                <span className={styles.value}>62&nbsp;000&nbsp;₽</span>
                <div className={styles.row}>
                    <span className={`${w.delta} ${w.good}`}><ArrowUpIcon aria-hidden="true" />+8,8% к августу</span>
                </div>
                <div className={styles.viz} role="img" aria-label="Доходы за последние шесть месяцев"></div>
            </article>
            <article className={styles.kpi}>
                <span className={styles.label}>Расходы в сентябре</span>
                <span className={styles.value}>25&nbsp;899&nbsp;₽</span>
                <div className={styles.row}>
                    <span className={`${w.delta} ${w.bad}`}><ArrowUpIcon aria-hidden="true" />+4,6% к 21 августа</span>
                </div>
                <div className={styles.viz} role="img" aria-label="Расходы по дням сентября"></div>
            </article>
            <article className={`${styles.kpi} ${styles.forecast}`}>
                <span className={styles.label}>Останется к концу месяца</span>
                <span className={styles.value}>≈&nbsp;25&nbsp;570&nbsp;₽</span>
                <span className={styles.note}>41% дохода, если остаток месяца пройдёт как в августе. Прогноз расходов ≈&nbsp;36&nbsp;430&nbsp;₽.</span>
                <div className={styles.meter} role="img" aria-label="Останется 41% дохода"><i style={{ width: '41%' }}></i></div>
            </article>
        </section>
    )
}
