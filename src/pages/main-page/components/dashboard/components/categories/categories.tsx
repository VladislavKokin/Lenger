import { useState } from 'react'
import { getErrorMessage, useDeleteCategoryMutation, useGetCategoriesQuery, type Category } from '../../../../../../../shared/api'
import {
    BankIcon,
    BusIcon,
    CalendarIcon,
    CardIcon,
    CartIcon,
    CaseIcon,
    CashIcon,
    CupIcon,
    DotsIcon,
    FilmIcon,
    HistoryIcon,
    HomeIcon,
    HouseIcon,
    MobileIcon,
    MonitorIcon,
    PencilIcon,
    PlusIcon,
    ShieldIcon,
    TabletIcon,
    TagIcon,
    TrashIcon,
    WalletIcon,
} from '../../../../../../../shared/ui/Icons/Icons'
import { Header } from '../header/header'
import { CategoryModal } from '../../../../../modal/category-modal/category-modal'
import styles from './categories.module.css'

const CATEGORY_ICONS = {
    cart: CartIcon,
    bus: BusIcon,
    house: HouseIcon,
    home: HomeIcon,
    cup: CupIcon,
    film: FilmIcon,
    bank: BankIcon,
    card: CardIcon,
    cash: CashIcon,
    wallet: WalletIcon,
    case: CaseIcon,
    tag: TagIcon,
    mobile: MobileIcon,
    tablet: TabletIcon,
    monitor: MonitorIcon,
    calendar: CalendarIcon,
    shield: ShieldIcon,
    history: HistoryIcon,
    dots: DotsIcon,
}

export const Categories = () => {
    const [modal, setModal] = useState<{ isOpen: boolean; category: Category | null; version: number }>({
        isOpen: false,
        category: null,
        version: 0,
    })
    const [deletingId, setDeletingId] = useState<string | null>(null)
    const [deleteError, setDeleteError] = useState<string | null>(null)
    const { data, error, isLoading } = useGetCategoriesQuery()
    const [deleteCategory] = useDeleteCategoryMutation()

    const categories = data?.categories.filter((category) => category.type === 'expense') ?? []

    const openModal = (category: Category | null) => {
        setDeleteError(null)
        setModal((current) => ({ isOpen: true, category, version: current.version + 1 }))
    }

    const closeModal = () => setModal((current) => ({ ...current, isOpen: false }))

    const handleDelete = async (category: Category) => {
        if (!window.confirm(`Удалить категорию «${category.name}»?`)) return

        setDeleteError(null)
        setDeletingId(category.id)
        try {
            const { error } = await deleteCategory(category.id)
            if (error) setDeleteError(getErrorMessage(error))
        } finally {
            setDeletingId(null)
        }
    }

    return (
        <>
            <Header title="Категории" />
            <section className="card">
                <div className="card-head">
                    <b>Категории расходов</b>
                    <button type="button" className="more" onClick={() => openModal(null)}>
                        <PlusIcon className="icon icon-sm" aria-hidden="true" />
                        Категория
                    </button>
                </div>

                <div className={styles.cats}>
                    {isLoading ? (
                        <p className={styles.state}>Загружаем категории…</p>
                    ) : error ? (
                        <p className={`${styles.state} ${styles.error}`} role="alert">{getErrorMessage(error)}</p>
                    ) : categories.length === 0 ? (
                        <p className={styles.state}>Категорий расходов пока нет</p>
                    ) : (
                        categories.map((category) => {
                            const Icon = CATEGORY_ICONS[category.icon as keyof typeof CATEGORY_ICONS] ?? DotsIcon

                            return (
                                <div key={category.id} className={styles.cat}>
                                    <span
                                        className={styles.tile}
                                        style={{
                                            background: `var(--color-cat-${category.color}-soft)`,
                                            color: `var(--color-cat-${category.color})`,
                                        }}
                                    >
                                        <Icon className="icon icon-sm" aria-hidden="true" />
                                    </span>
                                    <span className={styles.name}>{category.name}</span>
                                    <span className={styles.actions}>
                                        <button
                                            type="button"
                                            className={styles.action}
                                            aria-label={`Редактировать категорию «${category.name}»`}
                                            onClick={() => openModal(category)}
                                            disabled={deletingId !== null}
                                        >
                                            <PencilIcon className="icon icon-sm" aria-hidden="true" />
                                        </button>
                                        <button
                                            type="button"
                                            className={`${styles.action} ${styles.delete}`}
                                            aria-label={`Удалить категорию «${category.name}»`}
                                            onClick={() => void handleDelete(category)}
                                            disabled={deletingId !== null}
                                        >
                                            <TrashIcon className="icon icon-sm" aria-hidden="true" />
                                        </button>
                                    </span>
                                </div>
                            )
                        })
                    )}
                </div>

                {deleteError && <p className={`${styles.state} ${styles.error}`} role="alert">{deleteError}</p>}
                <CategoryModal
                    key={modal.version}
                    isOpen={modal.isOpen}
                    onClose={closeModal}
                    type="expense"
                    category={modal.category}
                />
            </section>
        </>
    )
}
