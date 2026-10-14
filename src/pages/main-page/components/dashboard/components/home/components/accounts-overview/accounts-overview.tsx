import { Link } from 'react-router'
import w from '../widget.module.css'
import { BankIcon, CardIcon, CashIcon, PencilIcon, PlusIcon, RightIcon, ShieldIcon, WalletIcon } from '../../../../../../../../../shared/ui/Icons/Icons'
import { ROUTES } from '../../../../../../../../../shared/routes/routes'

export const AccountsOverview = () => {
    return (
        <section className={`${w.card} ${w.narrow}`} aria-labelledby="ac-h">
            <div className={w.head}>
                <div>
                    <h3 id="ac-h">Где лежат деньги</h3>
                    <p>Остаток и изменение за сентябрь</p>
                </div>
                <Link className={w.more} to={ROUTES.ACCOUNTS}>Счета<RightIcon className="icon icon-sm" aria-hidden="true" /></Link>
            </div>
            <ul className={w.rank}>
                <li className={`${w.row} ${w.editable}`}>
                    <span className={`${w.tile} ${w.accent}`}><CardIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Основная карта</b><span>41&nbsp;320&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '100%' }}></i></div>
                        <div className={w.sub}><span>Дебетовая карта</span><span className={w.good}>+38&nbsp;581&nbsp;₽ за месяц</span></div>
                    </div>
                    <PencilIcon className={w.edit} aria-hidden="true" />
                </li>
                <li className={`${w.row} ${w.editable}`}>
                    <span className={`${w.tile} ${w.accent}`}><BankIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Накопительный</b><span>39&nbsp;000&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '94%' }}></i></div>
                        <div className={w.sub}><span>Вклад</span><span>без изменений</span></div>
                    </div>
                    <PencilIcon className={w.edit} aria-hidden="true" />
                </li>
                <li className={`${w.row} ${w.editable}`}>
                    <span className={`${w.tile} ${w.accent}`}><CashIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Кошелёк</b><span>3&nbsp;930&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '10%' }}></i></div>
                        <div className={w.sub}><span>Наличные</span><span className={w.bad}>−2&nbsp;480&nbsp;₽ за месяц</span></div>
                    </div>
                    <PencilIcon className={w.edit} aria-hidden="true" />
                </li>
            </ul>
            <ul className={`${w.insights} ${w.bottom}`}>
                <li><WalletIcon aria-hidden="true" /><span>Сразу доступно 45&nbsp;250&nbsp;₽, ещё 39&nbsp;000&nbsp;₽ — на вкладе.</span></li>
                <li><ShieldIcon aria-hidden="true" /><span>Запаса хватит на 2,3 месяца при обычных расходах — около 37&nbsp;100&nbsp;₽ в месяц.</span></li>
            </ul>
            <button type="button" className={w.addBtn}><PlusIcon className="icon icon-sm" aria-hidden="true" />Добавить счёт</button>
        </section>
    )
}
