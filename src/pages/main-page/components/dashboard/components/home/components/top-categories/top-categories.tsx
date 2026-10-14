import { Link } from 'react-router'
import w from '../widget.module.css'
import { ArrowDownIcon, ArrowUpIcon, BusIcon, CartIcon, CupIcon, DotsIcon, FilmIcon, HouseIcon, PlusIcon, RightIcon } from '../../../../../../../../../shared/ui/Icons/Icons'
import { ROUTES } from '../../../../../../../../../shared/routes/routes'

export const TopCategories = () => {
    return (
        <section className={`${w.card} ${w.narrow}`} aria-labelledby="ca-h">
            <div className={w.head}>
                <div>
                    <h3 id="ca-h">Куда уходят деньги</h3>
                    <p>Расходы с 1 по 21 сентября · 25&nbsp;899&nbsp;₽</p>
                </div>
                <Link className={w.more} to={ROUTES.CATEGORIES}>Категории<RightIcon className="icon icon-sm" aria-hidden="true" /></Link>
            </div>
            <ul className={w.rank}>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-blue-soft)', color: 'var(--color-cat-blue)' }}><CartIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Продукты</b><span>9&nbsp;960&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '100%' }}></i></div>
                        <div className={w.sub}><span>38% расходов</span><span className={`${w.delta} ${w.good}`}><ArrowDownIcon aria-hidden="true" />−2,8% к 21 авг.</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-teal-soft)', color: 'var(--color-cat-teal)' }}><HouseIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Дом</b><span>6&nbsp;440&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '65%' }}></i></div>
                        <div className={w.sub}><span>25% расходов</span><span className={`${w.delta} ${w.bad}`}><ArrowUpIcon aria-hidden="true" />+19,0% к 21 авг.</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-amber-soft)', color: 'var(--color-cat-amber)' }}><CupIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Кафе</b><span>3&nbsp;400&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '34%' }}></i></div>
                        <div className={w.sub}><span>13% расходов</span><span className={`${w.delta} ${w.bad}`}><ArrowUpIcon aria-hidden="true" />+13,3% к 21 авг.</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-pink-soft)', color: 'var(--color-cat-pink)' }}><FilmIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Развлечения</b><span>2&nbsp;699&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '27%' }}></i></div>
                        <div className={w.sub}><span>10% расходов</span><span className={`${w.delta} ${w.good}`}><ArrowDownIcon aria-hidden="true" />−18,2% к 21 авг.</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-green-soft)', color: 'var(--color-cat-green)' }}><DotsIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Прочее</b><span>1&nbsp;870&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '19%' }}></i></div>
                        <div className={w.sub}><span>7% расходов</span><span className={`${w.delta} ${w.bad}`}><ArrowUpIcon aria-hidden="true" />+71,6% к 21 авг.</span></div>
                    </div>
                </li>
                <li className={w.row}>
                    <span className={w.tile} style={{ background: 'var(--color-cat-orange-soft)', color: 'var(--color-cat-orange)' }}><BusIcon className="icon" aria-hidden="true" /></span>
                    <div>
                        <div className={w.top}><b>Транспорт</b><span>1&nbsp;530&nbsp;₽</span></div>
                        <div className={w.bar}><i style={{ width: '15%' }}></i></div>
                        <div className={w.sub}><span>6% расходов</span><span className={`${w.delta} ${w.good}`}><ArrowDownIcon aria-hidden="true" />−10,5% к 21 авг.</span></div>
                    </div>
                </li>
            </ul>
            <button type="button" className={w.addBtn}><PlusIcon className="icon icon-sm" aria-hidden="true" />Новая категория</button>
        </section>
    )
}
