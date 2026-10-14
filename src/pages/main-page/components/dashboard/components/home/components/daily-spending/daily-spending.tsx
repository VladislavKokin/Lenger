import w from '../widget.module.css'
import { ArrowUpIcon, CalendarIcon } from '../../../../../../../../../shared/ui/Icons/Icons'

export const DailySpending = () => {
    return (
        <section className={`${w.card} ${w.narrow}`} aria-labelledby="hm-h">
            <div className={w.head}>
                <div>
                    <h3 id="hm-h">Траты по дням</h3>
                    <p>Сентябрь: чем насыщеннее цвет, тем больше потрачено за день.</p>
                </div>
            </div>
            <div className={w.chart} role="img" aria-label="Расходы по дням сентября"></div>
            <ul className={w.insights}>
                <li><CalendarIcon aria-hidden="true" /><span>Самый дорогой день — 19 сентября: 6&nbsp;650&nbsp;₽, из них «Коммунальные платежи» 4&nbsp;900&nbsp;₽.</span></li>
                <li><ArrowUpIcon aria-hidden="true" /><span>По субботам вы тратите в среднем 2&nbsp;186&nbsp;₽ за день — в 2,2 раза больше, чем в остальные дни.</span></li>
            </ul>
        </section>
    )
}
