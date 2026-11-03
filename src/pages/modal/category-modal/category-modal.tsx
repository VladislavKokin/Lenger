import { useEffect, useRef, useState } from 'react'
import { Modal } from '../../../../shared/ui/Modal/Modal'
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
    ShieldIcon,
    TabletIcon,
    TagIcon,
    WalletIcon,
} from '../../../../shared/ui/Icons/Icons'
import form from '../modal.module.css'
import styles from './category-modal.module.css'

const ICONS = {
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

const COLORS = ['blue', 'orange', 'teal', 'amber', 'pink', 'green'] as const

type IconName = keyof typeof ICONS
type ColorName = (typeof COLORS)[number]
type Picker = 'icon' | 'color'

type CategoryModalProps = {
    isOpen: boolean
    onClose: () => void
}

export const CategoryModal = ({ isOpen, onClose }: CategoryModalProps) => {
    const [icon, setIcon] = useState<IconName>('cart')
    const [color, setColor] = useState<ColorName>('blue')
    const [open, setOpen] = useState<Picker | null>(null)
    const rowRef = useRef<HTMLDivElement>(null)
    const Icon = ICONS[icon]

    useEffect(() => {
        if (!open) return

        const close = (event: PointerEvent) => {
            if (!rowRef.current?.contains(event.target as Node)) setOpen(null)
        }

        document.addEventListener('pointerdown', close)
        return () => document.removeEventListener('pointerdown', close)
    }, [open])

    const toggle = (picker: Picker) => setOpen(open === picker ? null : picker)

    return (
        <Modal isOpen={isOpen} onClose={onClose} sheetOnMobile>
            <div className={form.root}>
                <h2 className={form.title}>Новая категория</h2>

                <form className={form.form}>
                    <div className={form.field}>
                        <label htmlFor="category-name">Название категории</label>
                        <div className={styles.nameRow} ref={rowRef}>
                            <input
                                id="category-name"
                                name="name"
                                type="text"
                                placeholder="Продукты"
                                required
                            />
                            <div className={styles.picker}>
                                <button
                                    type="button"
                                    className={styles.trigger}
                                    aria-label="Иконка"
                                    aria-expanded={open === 'icon'}
                                    style={{
                                        background: `var(--color-cat-${color}-soft)`,
                                        color: `var(--color-cat-${color})`,
                                    }}
                                    onClick={() => toggle('icon')}
                                >
                                    <Icon className="icon icon-sm" aria-hidden="true" />
                                </button>
                                {open === 'icon' && (
                                    <div className={styles.panel} role="group" aria-label="Иконка">
                                        {(Object.entries(ICONS) as [IconName, typeof Icon][]).map(([key, Item]) => (
                                            <button
                                                key={key}
                                                type="button"
                                                className={key === icon ? styles.iconOn : styles.icon}
                                                aria-pressed={key === icon}
                                                onClick={() => {
                                                    setIcon(key)
                                                    setOpen(null)
                                                }}
                                            >
                                                <Item className="icon icon-sm" aria-hidden="true" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className={styles.picker}>
                                <button
                                    type="button"
                                    className={styles.swatch}
                                    aria-label="Цвет"
                                    aria-expanded={open === 'color'}
                                    style={{
                                        background: `var(--color-cat-${color})`,
                                        color: `var(--color-cat-${color})`,
                                    }}
                                    onClick={() => toggle('color')}
                                />
                                {open === 'color' && (
                                    <div className={styles.panel} role="group" aria-label="Цвет">
                                        {COLORS.map((item) => (
                                            <button
                                                key={item}
                                                type="button"
                                                className={styles.color}
                                                aria-label={item}
                                                aria-pressed={item === color}
                                                style={{
                                                    background: `var(--color-cat-${item})`,
                                                    color: `var(--color-cat-${item})`,
                                                }}
                                                onClick={() => {
                                                    setColor(item)
                                                    setOpen(null)
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <input type="hidden" name="icon" value={icon} />
                    <input type="hidden" name="color" value={color} />

                    <button type="button" className={form.save}>
                        Добавить категорию
                    </button>
                </form>
            </div>
        </Modal>
    )
}
