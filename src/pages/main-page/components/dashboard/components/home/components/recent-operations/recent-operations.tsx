import { Link } from 'react-router'
import styles from './recent-operations.module.css'
import w from '../widget.module.css'
import { BusIcon, CartIcon, CaseIcon, CupIcon, FilmIcon, HouseIcon, RightIcon } from '../../../../../../../../../shared/ui/Icons/Icons'
import { ROUTES } from '../../../../../../../../../shared/routes/routes'

export const RecentOperations = () => {
    return (
        <section className={`${w.card} ${w.wide}`} aria-labelledby="op-h">
            <div className={w.head}>
                <div><h3 id="op-h">Операции</h3></div>
                <div className={w.actions}>
                    <div className={styles.tabs} role="tablist" aria-label="Список операций">
                        <button type="button" role="tab" aria-selected="true">Последние</button>
                        <button type="button" role="tab" aria-selected="false">Крупные за месяц</button>
                    </div>
                    <Link className={w.more} to={ROUTES.HISTORY}>Вся история<RightIcon className="icon icon-sm" aria-hidden="true" /></Link>
                </div>
            </div>
            <ul className={styles.list} role="tabpanel">
                <li>
                    <span className={w.tile} style={{ background: 'var(--color-cat-amber-soft)', color: 'var(--color-cat-amber)' }}><CupIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Кофе с собой</b><small>Кафе · Основная карта · сегодня</small></div>
                    <em>−240&nbsp;₽</em>
                </li>
                <li>
                    <span className={w.tile} style={{ background: 'var(--color-cat-orange-soft)', color: 'var(--color-cat-orange)' }}><BusIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Проезд</b><small>Транспорт · Основная карта · сегодня</small></div>
                    <em>−80&nbsp;₽</em>
                </li>
                <li>
                    <span className={`${w.tile} ${w.accent}`}><CaseIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Премия</b><small>Зарплата · Основная карта · вчера</small></div>
                    <em className={w.good}>+8&nbsp;000&nbsp;₽</em>
                </li>
                <li>
                    <span className={w.tile} style={{ background: 'var(--color-cat-blue-soft)', color: 'var(--color-cat-blue)' }}><CartIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Пятёрочка</b><small>Продукты · Основная карта · 19 сентября</small></div>
                    <em>−1&nbsp;750&nbsp;₽</em>
                </li>
                <li>
                    <span className={w.tile} style={{ background: 'var(--color-cat-teal-soft)', color: 'var(--color-cat-teal)' }}><HouseIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Коммунальные платежи</b><small>Дом · Основная карта · 19 сентября</small></div>
                    <em>−4&nbsp;900&nbsp;₽</em>
                </li>
                <li>
                    <span className={w.tile} style={{ background: 'var(--color-cat-amber-soft)', color: 'var(--color-cat-amber)' }}><CupIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Обед</b><small>Кафе · Основная карта · 18 сентября</small></div>
                    <em>−530&nbsp;₽</em>
                </li>
                <li>
                    <span className={w.tile} style={{ background: 'var(--color-cat-orange-soft)', color: 'var(--color-cat-orange)' }}><BusIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Проезд</b><small>Транспорт · Основная карта · 18 сентября</small></div>
                    <em>−80&nbsp;₽</em>
                </li>
                <li>
                    <span className={w.tile} style={{ background: 'var(--color-cat-pink-soft)', color: 'var(--color-cat-pink)' }}><FilmIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Подписка на кино</b><small>Развлечения · Основная карта · 18 сентября</small></div>
                    <em>−499&nbsp;₽</em>
                </li>
            </ul>
        </section>
    )
}
