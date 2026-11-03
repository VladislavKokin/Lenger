import { Modal } from '../../../../shared/ui/Modal/Modal'
import form from '../modal.module.css'
import styles from './operation-modal.module.css'

type OperationModalProps = {
    isOpen: boolean
    onClose: () => void
}

export const OperationModal = ({ isOpen, onClose }: OperationModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} sheetOnMobile>
            <div className={form.root}>
                <h2 className={form.title}>Новая операция</h2>

                <form className={form.form}>
                    <label className={form.field} htmlFor="operation-amount">
                        Сумма
                        <input
                            id="operation-amount"
                            name="amount"
                            type="number"
                            placeholder="0"
                        />
                    </label>

                    <fieldset className={styles.categories}>
                        <legend>Категория</legend>
                        <div className={styles.list}>
                            <button type="button" className={styles.chipOn}>Продукты</button>
                            <button type="button" className={styles.chip}>Кафе</button>
                            <button type="button" className={styles.chip}>Дом</button>
                            <button type="button" className={styles.chip}>Транспорт</button>
                            <button type="button" className={styles.add}>+ Категория</button>
                        </div>
                    </fieldset>

                    <label className={form.field} htmlFor="operation-comment">
                        Комментарий
                        <textarea
                            id="operation-comment"
                            name="comment"
                            maxLength={200}
                            placeholder="Необязательно"
                        />
                    </label>

                    <button type="button" className={form.save}>
                        Добавить операцию
                    </button>
                </form>
            </div>
        </Modal>
    )
}