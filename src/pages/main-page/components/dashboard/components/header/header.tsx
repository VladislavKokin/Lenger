import styles from './header.module.css'
import { LeftIcon, RightIcon, PlusIcon } from '../../../../../../../shared/ui/Icons/Icons'

type HeaderProps = {
    title: string
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <section className={styles.header}>
            <h4>{title}</h4>
            <span className={styles.pill}>
                <button>
                    <LeftIcon className="icon icon-sm" aria-hidden="true" />
                </button>
                Сентябрь 2026
                <button>
                    <RightIcon className="icon icon-sm" aria-hidden="true" />
                </button>
            </span>
            <span className={styles.asof}>Данные на 21 сентября</span>
            <span className={styles.grow}></span>
            <button className={styles.btnAcc}>
                <PlusIcon className="icon icon-sm" aria-hidden="true" />
                Новая операция
            </button>
        </section>
    )
}
