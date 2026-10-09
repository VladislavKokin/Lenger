import { useEffect, type ReactNode } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import styles from './Modal.module.css'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const transition = { duration: 0.2, ease: [0.2, 0.8, 0.2, 1] } as const

const overlay = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

const card = {
  closed: { y: 16, scale: 0.97 },
  open: { y: 0, scale: 1 },
}

const showAsModal = (dialog: HTMLDialogElement | null) => {
  if (dialog && !dialog.open) dialog.showModal()
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return

    const { style } = document.body
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    style.overflow = 'hidden'
    style.paddingRight = `${scrollbarWidth}px`

    return () => {
      style.overflow = ''
      style.paddingRight = ''
    }
  }, [isOpen])

  return (
    <MotionConfig reducedMotion="user" transition={transition}>
      <AnimatePresence>
        {isOpen && (
          <motion.dialog
            ref={showAsModal}
            className={styles.overlay}
            variants={overlay}
            initial="closed"
            animate="open"
            exit="closed"
            onClose={onClose}
            onCancel={(event) => {
              event.preventDefault()
              onClose()
            }}
            onPointerDown={(event) => {
              if (event.target === event.currentTarget) onClose()
            }}
          >
            <motion.div className={styles.card} variants={card}>
              {children}
              <button type="button" className={styles.close} aria-label="Закрыть" onClick={onClose}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </motion.div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
