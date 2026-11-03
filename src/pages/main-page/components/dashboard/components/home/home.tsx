import { Header } from '../header/header'
import { Kpis, SpendingTrend, TopCategories, AccountsOverview, RecentOperations } from './components'
import styles from './home.module.css'

export const Home = () => {
    return (
        <>
        <Header title="Главная" />
        <div className={styles.home}>
            <Kpis />
            <div className={styles.grid}>
                <SpendingTrend />
                <TopCategories />
                <RecentOperations />
                <AccountsOverview />
            </div>
        </div>
        </>
    )
}