import { useState } from 'react'
import {
    getErrorMessage,
    useGetAccountsQuery,
    useDeleteAccountMutation,
    type Account,
} from '../../../../../../../shared/api'
import { WalletIcon, PencilIcon, PlusIcon, TrashIcon } from '../../../../../../../shared/ui/Icons/Icons'
import { Header } from '../header/header'
import { AccountModal } from '../../../../../modal/account/account-modal'
import styles from './accounts.module.css'

const money = (value: number) => `${value.toLocaleString('ru-RU')} ₽`

export const Accounts = () => {
    const { data, error, isLoading } = useGetAccountsQuery()
    const [deleteAccount, deleteState] = useDeleteAccountMutation()
    const [modal, setModal] = useState<{
        isOpen: boolean
        account: Account | null
        version: number
    }>({ isOpen: false, account: null, version: 0 })

    const accounts = data?.accounts ?? []
    const total = accounts.reduce((sum, account) => sum + account.initialBalance, 0)

    const openModal = (account: Account | null) => {
        deleteState.reset()
        setModal((current) => ({ isOpen: true, account, version: current.version + 1 }))
    }
    const closeModal = () => setModal((current) => ({ ...current, isOpen: false }))

    const handleDelete = async (account: Account) => {
        if (!window.confirm(`Удалить счёт «${account.name}»?`)) return
        try {
            await deleteAccount(account.id).unwrap()
        } catch {
            return
        }
    }

    return (
        <>
            <Header title="Счета" />
            <section className="card">
                <div className="card-head">
                    <b>Счета</b>
                    <button type="button" className="more" onClick={() => openModal(null)} disabled={deleteState.isLoading}>
                        <PlusIcon className="icon icon-sm" aria-hidden="true" />Счёт
                    </button>
                </div>
                {isLoading ? (
                    <p>Загружаем счета…</p>
                ) : error ? (
                    <p className={styles.error} role="alert">{getErrorMessage(error)}</p>
                ) : accounts.length === 0 ? (
                    <p>Счетов пока нет. Добавь первый счёт.</p>
                ) : (
                    <>
                        <p className={styles.total}>
                            Всего<b><mark className={styles.hl}>{money(total)}</mark></b>
                        </p>
                        <ul className={styles.list}>
                            {accounts.map((account) => (
                                <li key={account.id}>
                                    <span className={styles.tile}>
                                        <WalletIcon className="icon" aria-hidden="true" />
                                    </span>
                                    <div><b>{account.name}</b><small>{account.type}</small></div>
                                    <em>{money(account.initialBalance)}</em>
                                    <div className={styles.actions}>
                                        <button
                                            type="button"
                                            className={styles.action}
                                            aria-label={`Редактировать счёт «${account.name}»`}
                                            onClick={() => openModal(account)}
                                            disabled={deleteState.isLoading}
                                        >
                                            <PencilIcon className="icon icon-sm" aria-hidden="true" />
                                        </button>
                                        <button
                                            type="button"
                                            className={`${styles.action} ${styles.danger}`}
                                            aria-label={`Удалить счёт «${account.name}»`}
                                            onClick={() => void handleDelete(account)}
                                            disabled={deleteState.isLoading}
                                        >
                                            <TrashIcon className="icon icon-sm" aria-hidden="true" />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {deleteState.error && (
                    <p className={styles.error} role="alert">{getErrorMessage(deleteState.error)}</p>
                )}
                <AccountModal
                    key={modal.version}
                    isOpen={modal.isOpen}
                    account={modal.account}
                    onClose={closeModal}
                />
            </section>
        </>
    )
}
