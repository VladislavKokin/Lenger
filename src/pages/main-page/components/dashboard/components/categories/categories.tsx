import { useState } from 'react'
import { BusIcon, CartIcon, CupIcon, DotsIcon, FilmIcon, HouseIcon, PlusIcon } from '../../../../../../../shared/ui/Icons/Icons'
import { Header } from '../header/header'
import { CategoryModal } from '../../../../../modal/category-modal/category-modal'
import styles from './categories.module.css'


export const Categories = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)

    return (
        <>
            <Header title="Категории" />
            <section className="card">
                <div className="card-head">
                    <b>Категории</b>
                    <button type="button" className="more" onClick={() => setIsCategoryOpen(true)}>
                        <PlusIcon className="icon icon-sm" aria-hidden="true" />
                        Категория
                    </button>                
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
                    </div>
                    <CategoryModal isOpen={isCategoryOpen} onClose={() => setIsCategoryOpen(false)} />
            </section>
        </>
    )
}
