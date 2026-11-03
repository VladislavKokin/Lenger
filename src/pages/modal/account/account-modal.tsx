import { Modal } from '../../../../shared/ui/Modal/Modal'
import form from '../modal.module.css'
// import styles from './account-modul.module.css'


type AccountModalProps = {
    isOpen: boolean
    onClose: () => void
}

export const AccountModal = ({ isOpen, onClose }: AccountModalProps) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} sheetOnMobile>
            <div className={form.root}>
                <h2 className={form.title}>Новый счёт</h2>
            </div>
        </Modal>
    )
}
