import { Link } from 'react-router'
import w from '../widget.module.css'
import { BusIcon, CartIcon, CupIcon, DotsIcon, FilmIcon, HouseIcon, RightIcon } from '../../../../../../../../../shared/ui/Icons/Icons'
import { ROUTES } from '../../../../../../../../../shared/routes/routes'

export const TopCategories = () => {
    return (
        <section className={`${w.card} ${w.narrow}`} aria-labelledby="ca-h">
            <div className={w.head}>
                <div>
                    <h3 id="ca-h">Куда уходят деньги</h3>
                </div>
                <Link className="more" to={ROUTES.CATEGORIES}>Категории<RightIcon className="icon icon-sm" aria-hidden="true" /></Link>
            </div>
            <ul className={w.rank}>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-blue-soft)', color: 'var(--color-cat-blue)' }}><CartIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Продукты</b><span>9&nbsp;960&nbsp;₽</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-teal-soft)', color: 'var(--color-cat-teal)' }}><HouseIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Дом</b><span>6&nbsp;440&nbsp;₽</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-amber-soft)', color: 'var(--color-cat-amber)' }}><CupIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Кафе</b><span>3&nbsp;400&nbsp;₽</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-pink-soft)', color: 'var(--color-cat-pink)' }}><FilmIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Развлечения</b><span>2&nbsp;699&nbsp;₽</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-green-soft)', color: 'var(--color-cat-green)' }}><DotsIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Прочее</b><span>1&nbsp;870&nbsp;₽</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-orange-soft)', color: 'var(--color-cat-orange)' }}><BusIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Транспорт</b><span>1&nbsp;530&nbsp;₽</span></div>
                    </div>
                </li>
            </ul>
        </section>
    )
}
