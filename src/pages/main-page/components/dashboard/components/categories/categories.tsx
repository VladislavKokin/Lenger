import styles from './categories.module.css'
import { BusIcon, CartIcon, CupIcon, DotsIcon, FilmIcon, HouseIcon, PlusIcon } from '../../../../../../../shared/ui/Icons/Icons'
import { Header } from '../header/header'

export const Categories = () => {
    return (
        <>
        <Header title="Категории" />
        <section className="card">
            <div className="card-head">
                <b>Категории</b>
                <span className="card-action"><PlusIcon className="icon icon-sm" aria-hidden="true" />Категория</span>
            </div>
            <div className={styles.tabs}><span className={styles.on}>Расходы</span><span>Доходы</span></div>
            <div className={styles.cats}>
                <div className={styles.cat}>
                    <span className={styles.tile} style={{ background: 'var(--color-cat-blue-soft)', color: 'var(--color-cat-blue)' }}><CartIcon className="icon icon-sm" aria-hidden="true" /></span>
                    <span>Продукты</span>
                </div>
                <div className={styles.cat}>
                    <span className={styles.tile} style={{ background: 'var(--color-cat-orange-soft)', color: 'var(--color-cat-orange)' }}><BusIcon className="icon icon-sm" aria-hidden="true" /></span>
                    <span>Транспорт</span>
                </div>
                <div className={styles.cat}>
                    <span className={styles.tile} style={{ background: 'var(--color-cat-teal-soft)', color: 'var(--color-cat-teal)' }}><HouseIcon className="icon icon-sm" aria-hidden="true" /></span>
                    <span>Дом</span>
                </div>
                <div className={styles.cat}>
                    <span className={styles.tile} style={{ background: 'var(--color-cat-amber-soft)', color: 'var(--color-cat-amber)' }}><CupIcon className="icon icon-sm" aria-hidden="true" /></span>
                    <span>Кафе</span>
                </div>
                <div className={styles.cat}>
                    <span className={styles.tile} style={{ background: 'var(--color-cat-pink-soft)', color: 'var(--color-cat-pink)' }}><FilmIcon className="icon icon-sm" aria-hidden="true" /></span>
                    <span>Развлечения</span>
                </div>
                <div className={styles.cat}>
                    <span className={styles.tile} style={{ background: 'var(--color-cat-green-soft)', color: 'var(--color-cat-green)' }}><DotsIcon className="icon icon-sm" aria-hidden="true" /></span>
                    <span>Прочее</span>
                </div>
                <div className={`${styles.cat} ${styles.add}`}>
                    <span className={styles.tile}><PlusIcon className="icon icon-sm" aria-hidden="true" /></span>
                    <span>Добавить</span>
                </div>
            </div>
        </section>
        </>
    )
}
