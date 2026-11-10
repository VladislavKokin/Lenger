import type { SubmitEvent } from 'react'
import {
    getErrorMessage,
    useCreateAccountMutation,
    useUpdateAccountMutation,
    type Account,
} from '../../../../shared/api'
import { Modal } from '../../../../shared/ui/Modal/Modal'
import form from '../modal.module.css'

type AccountModalProps = {
    isOpen: boolean
    onClose: () => void
    account?: Account | null
}

export const AccountModal = ({ isOpen, onClose, account = null }: AccountModalProps) => {
    const [createAccount, createState] = useCreateAccountMutation()
    const [updateAccount, updateState] = useUpdateAccountMutation()
    const state = account ? updateState : createState

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (state.isLoading) return

        const fields = new FormData(event.currentTarget)
        const data = {
            name: String(fields.get('name') ?? '').trim(),
            type: String(fields.get('type') ?? '').trim(),
            initialBalance: Number(fields.get('initialBalance') ?? 0),
        }

        try {
            if (account) {
                await updateAccount({ id: account.id, data }).unwrap()
            } else {
                await createAccount(data).unwrap()
            }
            onClose()
        } catch {
            return
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} sheetOnMobile>
            <div className={form.root}>
                <h2 className={form.title}>
                    {account ? 'Редактировать счёт' : 'Новый счёт'}
                </h2>
                <form className={form.form} onSubmit={handleSubmit}>
                    <label className={form.field} htmlFor="account-name">
                        Название счёта
                        <input
                            id="account-name"
                            name="name"
                            type="text"
                            defaultValue={account?.name ?? ''}
                            placeholder="Например, На отпуск"
                            maxLength={40}
                            required
                        />
                    </label>
                    <label className={form.field} htmlFor="account-type">
                        Тип счёта
                        <input
                            id="account-type"
                            name="type"
                            type="text"
                            defaultValue={account?.type ?? ''}
                            placeholder="Например, Наличные"
                            required
                        />
                    </label>
                    <label className={form.field} htmlFor="account-balance">
                        Начальный остаток, ₽
                        <input
                            id="account-balance"
                            name="initialBalance"
                            type="number"
                            step={1}
                            defaultValue={account?.initialBalance ?? 0}
                        />
                    </label>
                    {state.error && (
                        <p className={form.error} role="alert">
                            {getErrorMessage(state.error)}
                        </p>
                    )}
                    <button type="submit" className={form.save} disabled={state.isLoading}>
                        {state.isLoading ? 'Сохраняем…' : account ? 'Сохранить изменения' : 'Добавить счёт'}
                    </button>
                </form>
            </div>
        </Modal>
    )
}