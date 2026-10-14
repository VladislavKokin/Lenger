import styles from './accounts.module.css'
import { BankIcon, CardIcon, CashIcon, PencilIcon, PlusIcon } from '../../../../../../../shared/ui/Icons/Icons'
import { Header } from '../header/header'

export const Accounts = () => {
    return (
        <>
        <Header title="Счета" />
        <section className="card">
            <div className="card-head">
                <b>Счета</b>
                <span className="card-action"><PlusIcon className="icon icon-sm" aria-hidden="true" />Счёт</span>
            </div>
            <p className={styles.total}>Всего<b><mark className={styles.hl}>84&nbsp;250&nbsp;₽</mark></b></p>
            <ul className={styles.list}>
                <li>
                    <span className={styles.tile}><CardIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Основная карта</b><small>Дебетовая карта</small></div>
                    <em>41&nbsp;320&nbsp;₽</em>
                    <PencilIcon className={`icon icon-sm ${styles.edit}`} aria-hidden="true" />
                </li>
                <li>
                    <span className={styles.tile}><CashIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Кошелёк</b><small>Наличные</small></div>
                    <em>3&nbsp;930&nbsp;₽</em>
                    <PencilIcon className={`icon icon-sm ${styles.edit}`} aria-hidden="true" />
                </li>
                <li>
                    <span className={styles.tile}><BankIcon className="icon" aria-hidden="true" /></span>
                    <div><b>Накопительный</b><small>Вклад</small></div>
                    <em>39&nbsp;000&nbsp;₽</em>
                    <PencilIcon className={`icon icon-sm ${styles.edit}`} aria-hidden="true" />
                </li>
            </ul>
        </section>
        </>
    )
}
