import { useState } from 'react'
import { NavLink } from 'react-router'
import { HomeIcon, HistoryIcon, WalletIcon, TagIcon, SlidersIcon } from '../../../../../../../shared/ui/Icons/Icons'
import { ROUTES } from '../../../../../../../shared/routes/routes'
import { Settings } from '../../../../../modal/settings/settings'
import styles from './navigation.module.css'

const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? styles.on : undefined)

export const Navigation = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    return (
        <aside className={styles.side}>
            <div className={styles.brand}><i>₽</i>Мои финансы</div>
            <nav className={styles.nav} aria-label="Главное меню">
                <NavLink to={ROUTES.MAIN} end className={linkClass}>
                    <HomeIcon className={`icon ${styles.ico}`} aria-hidden="true" />
                    Главная
                </NavLink>
                <NavLink to={ROUTES.HISTORY} className={linkClass}>
                    <HistoryIcon className={`icon ${styles.ico}`} aria-hidden="true" />
                    История операций
                </NavLink>
                <NavLink to={ROUTES.ACCOUNTS} className={linkClass}>
                    <WalletIcon className={`icon ${styles.ico}`} aria-hidden="true" />
                    Счета
                </NavLink>
                <NavLink to={ROUTES.CATEGORIES} className={linkClass}>
                    <TagIcon className={`icon ${styles.ico}`} aria-hidden="true" />
                    Категории
                </NavLink>
                <button type="button" onClick={() => setIsSettingsOpen(true)}>
                    <SlidersIcon className={`icon ${styles.ico}`} aria-hidden="true" />
                    Настройки
                </button>
            </nav>
            <div className={styles.user}>
                <span className={styles.ava}>ИП</span>
                <div><b>Иван Петров</b><small>Профиль</small></div>
            </div>
            <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
        </aside>
    )
}