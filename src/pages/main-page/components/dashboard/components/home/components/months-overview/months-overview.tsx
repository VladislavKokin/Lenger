import w from '../widget.module.css'

export const MonthsOverview = () => {
    return (
        <section className={`${w.card} ${w.wide}`} aria-labelledby="mo-h">
            <div className={w.head}>
                <div>
                    <h3 id="mo-h">Доходы и расходы за 12 месяцев</h3>
                    <p>Пунктир над сентябрём — прогноз расходов до конца месяца.</p>
                </div>
                <div className={w.actions}>
                    <div className={w.legend}>
                        <span><i className={w.box} style={{ background: 'var(--color-chart-income)' }}></i>Доходы</span>
                        <span><i className={w.box} style={{ background: 'var(--color-chart-expense)' }}></i>Расходы</span>
                    </div>
                    <button type="button" className={w.tableBtn} aria-pressed="false">Таблица</button>
                </div>
            </div>
            <div className={w.chart} role="img" aria-label="Доходы и расходы по месяцам с октября 2025 по сентябрь 2026"></div>
            <div className={w.stats}>
                <div><small>Отложено за 11 полных месяцев</small><b>212&nbsp;371&nbsp;₽</b></div>
                <div><small>В среднем</small><b>34% дохода</b></div>
                <div><small>Лучший месяц</small><b>Апрель, 42%</b></div>
            </div>
        </section>
    )
}
