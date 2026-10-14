import styles from './history.module.css'
import { BusIcon, CartIcon, CaseIcon, CupIcon, FilmIcon, HouseIcon } from '../../../../../../../shared/ui/Icons/Icons'
import { Header } from '../header/header'

export const History = () => {
    return (
        <>
        <Header title="История операций" />
        <section className="card">
            <div className="card-head">
                <b>Последние операции</b>
            </div>
            <ul className={styles.list}>
                <li>
                    <span className={styles.tile}><CartIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Продукты «Пятёрочка»</b><small>Продукты · Основная карта · Сегодня</small></div>
                    <em>−1&nbsp;240&nbsp;₽</em>
                </li>
                <li>
                    <span className={styles.tile}><CaseIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Зарплата</b><small>Доход · Основная карта · Сегодня</small></div>
                    <em className={styles.pos}>+62&nbsp;000&nbsp;₽</em>
                </li>
                <li>
                    <span className={styles.tile}><BusIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Такси до работы</b><small>Транспорт · Кошелёк · Вчера</small></div>
                    <em>−380&nbsp;₽</em>
                </li>
                <li>
                    <span className={styles.tile}><CupIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Кофе с собой</b><small>Кафе · Кошелёк · Вчера</small></div>
                    <em>−260&nbsp;₽</em>
                </li>
                <li>
                    <span className={styles.tile}><HouseIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Коммунальные платежи</b><small>Дом · Основная карта · 19 сент</small></div>
                    <em>−4&nbsp;900&nbsp;₽</em>
                </li>
                <li>
                    <span className={styles.tile}><FilmIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Подписка на кино</b><small>Развлечения · Основная карта · 18 сент</small></div>
                    <em>−499&nbsp;₽</em>
                </li>
            </ul>
        </section>
        </>
    )
}
