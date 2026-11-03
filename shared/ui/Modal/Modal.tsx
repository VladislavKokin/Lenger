import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import styles from './Modal.module.css'
import { CloseIcon } from '../Icons/Icons'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  sheetOnMobile?: boolean
}

const transition = { duration: 0.2, ease: [0.2, 0.8, 0.2, 1] } as const
const sheetTransition = { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] } as const

const overlay = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

const card = {
  closed: { y: 16, scale: 0.97 },
  open: { y: 0, scale: 1 },
}

const sheetCard = {
  closed: { y: '100%' },
  open: { y: 0 },
}

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(max-width: 600px)')
    const apply = () => setIsMobile(media.matches)

    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  return isMobile
}

export const Modal = ({ isOpen, onClose, children, sheetOnMobile = false }: ModalProps) => {
  const isMobile = useIsMobile()
  const isSheet = sheetOnMobile && isMobile
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [entered, setEntered] = useState(false)
  const [sheetReady, setSheetReady] = useState(false)

  useIsoLayoutEffect(() => {
    if (!isOpen) return

    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()

    if (isSheet) {
      setSheetReady(true)
      return
    }

    const frame = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(frame)
  }, [isOpen, isSheet])

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
      <AnimatePresence
        onExitComplete={() => {
          setEntered(false)
          setSheetReady(false)
        }}
      >
        {isOpen && (
          <motion.dialog
            ref={dialogRef}
            className={sheetOnMobile ? `${styles.overlay} ${styles.sheet}` : styles.overlay}
            variants={isSheet ? undefined : overlay}
            initial={isSheet ? { opacity: 1 } : 'closed'}
            animate={isSheet ? { opacity: 1 } : entered ? 'open' : 'closed'}
            exit={isSheet ? { opacity: 1 } : 'closed'}
            onClose={onClose}
            onCancel={(event) => {
              event.preventDefault()
              onClose()
            }}
            onPointerDown={(event) => {
              if (event.target === event.currentTarget) onClose()
            }}
          >
            {(!isSheet || sheetReady) && (
              <motion.div
                className={styles.card}
                variants={isSheet ? sheetCard : card}
                initial="closed"
                animate={isSheet || entered ? 'open' : 'closed'}
                exit="closed"
                transition={isSheet ? sheetTransition : undefined}
              >
                {sheetOnMobile && <span className={styles.handle} aria-hidden="true" />}
                {children}
                <button type="button" className={styles.close} aria-label="Закрыть" onClick={onClose}>
                  <CloseIcon aria-hidden="true" />
                </button>
              </motion.div>
            )}
          </motion.dialog>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
