import { Modal } from '../../../../shared/ui/Modal/Modal'
import form from '../modal.module.css'
import styles from './account-modal.module.css'


type AccountModalProps = {
    isOpen: boolean
    onClose: () => void
}

export const AccountModal = ({ isOpen, onClose }: AccountModalProps) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} sheetOnMobile>
            <div className={form.root}>
                <h2 className={form.title}>Новый счёт</h2>

                <form className={form.form}>
                    <div className={form.field}>
                        <label htmlFor="account-name">Название счёта</label>

                        <div className={styles.nameRow}>
                            <input
                                id="account-name"
                                name="name"
                                type="text"
                                placeholder="Например, 'Зарплатная карта'"
                                required
                            />
                        </div>
                    </div>

                    <div className={form.field}>
                        <label htmlFor="account-type">Тип дохода или сбережений</label>
                        <div className={styles.nameRow}>
                            <input
                                id="account-type"
                                name="type"
                                type="text"
                                placeholder="'Наличные'"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className={form.save}>
                        Добавить счёт
                    </button>
                </form>
            </div>
        </Modal>
    )
}