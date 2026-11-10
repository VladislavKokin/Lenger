import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { getErrorMessage, useGetCategoriesQuery } from '../../../../shared/api'
import { Modal } from '../../../../shared/ui/Modal/Modal'
import form from '../modal.module.css'
import styles from './operation-modal.module.css'

type OperationModalProps = {
    isOpen: boolean
    onClose: () => void
}

type OperationType = 'expense' | 'income'
const accountExamples = ['Основная карта', 'Кошелёк', 'Накопительный'] as const

export const OperationModal = ({ isOpen, onClose }: OperationModalProps) => {
    const [operationType, setOperationType] = useState<OperationType>('expense')
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)
    const [selectedAccount, setSelectedAccount] = useState<string>(accountExamples[0])
    const [amount, setAmount] = useState('')
    const [comment, setComment] = useState('')
    const { data, error, isLoading } = useGetCategoriesQuery(undefined, { skip: !isOpen })
    const categories = data?.categories.filter((category) => category.type === 'expense') ?? []
    const selectedCategory = categories.find((category) => category.id === selectedCategoryId) ?? categories[0]
    const offset = operationType === 'income' ? 16 : -16

    const selectOperationType = (type: OperationType) => {
        setOperationType(type)
        setSelectedCategoryId(null)
        setSelectedAccount(accountExamples[0])
    }

    const handleClose = () => {
        setOperationType('expense')
        setSelectedCategoryId(null)
        setSelectedAccount(accountExamples[0])
        setAmount('')
        setComment('')
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={handleClose} sheetOnMobile>
            <div className={form.root}>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.h2
                        key={operationType}
                        className={form.title}
                        initial={{ opacity: 0, x: offset }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: offset }}
                        transition={{ duration: 0.15 }}
                    >
                        {operationType === 'expense' ? 'Новый расход' : 'Новый доход'}
                    </motion.h2>
                </AnimatePresence>

                <div
                    className={`${styles.typeSwitch} ${operationType === 'income' ? styles.typeSwitchIncome : ''}`}
                    role="group"
                    aria-label="Тип операции"
                >
                    <button
                        type="button"
                        className={`${styles.typeButton} ${operationType === 'expense' ? styles.typeButtonActive : ''}`}
                        aria-pressed={operationType === 'expense'}
                        onClick={() => selectOperationType('expense')}
                    >
                        Расход
                    </button>
                    <button
                        type="button"
                        className={`${styles.typeButton} ${operationType === 'income' ? styles.typeButtonActive : ''}`}
                        aria-pressed={operationType === 'income'}
                        onClick={() => selectOperationType('income')}
                    >
                        Доход
                    </button>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                <motion.form
                    key={operationType}
                    className={form.form}
                    onSubmit={(event) => event.preventDefault()}
                    initial={{ opacity: 0, x: offset }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: offset }}
                    transition={{ duration: 0.15 }}
                >
                    <input type="hidden" name="type" value={operationType} />
                    <label className={form.field} htmlFor="operation-amount">
                        Сумма
                        <input
                            id="operation-amount"
                            name="amount"
                            type="number"
                            placeholder="0"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    </label>

                    <fieldset className={styles.categories}>
                        <legend>{operationType === 'expense' ? 'Категория' : 'Счёт'}</legend>
                        <div className={styles.list}>
                            {operationType === 'expense' ? (
                                isLoading ? (
                                    <p className={styles.message}>Загружаем категории…</p>
                                ) : error ? (
                                    <p className={`${styles.message} ${styles.error}`} role="alert">{getErrorMessage(error)}</p>
                                ) : categories.length === 0 ? (
                                    <p className={styles.message}>Категорий расходов пока нет</p>
                                ) : categories.map((category) => (
                                    <button
                                        key={category.id}
                                        type="button"
                                        className={selectedCategory?.id === category.id ? styles.chipOn : styles.chip}
                                        aria-pressed={selectedCategory?.id === category.id}
                                        onClick={() => setSelectedCategoryId(category.id)}
                                    >
                                        {category.name}
                                    </button>
                                ))
                            ) : accountExamples.map((account) => (
                                <button
                                    key={account}
                                    type="button"
                                    className={selectedAccount === account ? styles.chipOn : styles.chip}
                                    aria-pressed={selectedAccount === account}
                                    onClick={() => setSelectedAccount(account)}
                                >
                                    {account}
                                </button>
                            ))}
                        </div>
                        {operationType === 'expense' && (
                            <input type="hidden" name="categoryId" value={selectedCategory?.id ?? ''} />
                        )}
                    </fieldset>

                    <label className={form.field} htmlFor="operation-comment">
                        Комментарий
                        <textarea
                            id="operation-comment"
                            name="comment"
                            maxLength={200}
                            placeholder="Необязательно"
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                        />
                    </label>

                    <button type="button" className={form.save}>
                        {operationType === 'expense' ? 'Добавить расход' : 'Добавить доход'}
                    </button>

                </motion.form>
                </AnimatePresence>
            </div>
        </Modal>
    )
}
