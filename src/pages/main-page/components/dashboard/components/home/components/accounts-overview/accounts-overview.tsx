import { Link } from 'react-router'
import w from '../widget.module.css'
import { BankIcon, CardIcon, CashIcon, RightIcon } from '../../../../../../../../../shared/ui/Icons/Icons'
import { ROUTES } from '../../../../../../../../../shared/routes/routes'

export const AccountsOverview = () => {
    return (
        <section className={`${w.card} ${w.narrow}`} aria-labelledby="ac-h">
            <div className={w.head}>
                <div>
                    <h3 id="ac-h">Где лежат деньги</h3>
                    <p>Остаток и изменение за сентябрь</p>
                </div>
                <Link className="more" to={ROUTES.ACCOUNTS}>Счета<RightIcon className="icon icon-sm" aria-hidden="true" /></Link>
            </div>
            <ul className={w.rank}>
                <li className={w.row}>
                    <span className={`${w.tile} ${w.accent}`}><CardIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Основная карта</b><span>41&nbsp;320&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '100%' }}></i></div>
                        <div className={w.sub}><span>Дебетовая карта</span><span className={w.good}>+38&nbsp;581&nbsp;₽ за месяц</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={`${w.tile} ${w.accent}`}><BankIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Накопительный</b><span>39&nbsp;000&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '94%' }}></i></div>
                        <div className={w.sub}><span>Вклад</span><span>без изменений</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={`${w.tile} ${w.accent}`}><CashIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Кошелёк</b><span>3&nbsp;930&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '10%' }}></i></div>
                        <div className={w.sub}><span>Наличные</span><span className={w.bad}>−2&nbsp;480&nbsp;₽ за месяц</span></div>
                    </div>
                </li>
            </ul>
        </section>
    )
}
