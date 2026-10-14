import { Outlet, useLocation } from 'react-router'
import { FadeIn } from '../../../../../shared/ui/FadeIn/FadeIn'
import { Navigation } from './components'
import styles from './dashboard.module.css'

export const Dashboard = () => {
    const { pathname } = useLocation()

    return(
        <FadeIn as="section" className={styles.dashboard}>
            <Navigation/>
            <main key={pathname} className={styles.page}>
                <Outlet />
            </main>
        </FadeIn>
    )
}