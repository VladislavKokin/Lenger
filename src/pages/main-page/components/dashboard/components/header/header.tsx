import { useState } from 'react'
import { OperationModal } from '../../../../../modal/operation-modal/operation-modal'
import { LeftIcon, RightIcon, PlusIcon } from '../../../../../../../shared/ui/Icons/Icons'
import styles from './header.module.css'

type HeaderProps = {
    title?: string
}

export const Header = ({ title = 'Главная' }: HeaderProps) => {
    const [isOperationOpen, setIsOperationOpen] = useState(false);

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
            <button type="button" className={styles.btnAcc} onClick={() => setIsOperationOpen(true)}>
                <PlusIcon className="icon icon-sm" aria-hidden="true" />
                Новая операция
            </button>
            <OperationModal isOpen={isOperationOpen} onClose={() => setIsOperationOpen(false)} />
        </section>
    )
};
