import w from '../widget.module.css'

export const SpendingTrend = () => {
    return (
        <section className={`${w.card} ${w.wide}`} aria-labelledby="cu-h">
            <div className={w.head}>
                <div>
                    <h3 id="cu-h">Расходы нарастающим итогом</h3>
                    <p>Сентябрь против августа. Наведите курсор или выберите график и листайте стрелками.</p>
                </div>
                <div className={w.actions}>
                    <div className={w.legend}>
                        <span><i className={w.line} style={{ borderColor: 'var(--color-accent-text)' }}></i>Сентябрь</span>
                        <span><i className={`${w.line} ${w.dashed}`} style={{ borderColor: 'var(--color-accent-text)' }}></i>Прогноз</span>
                        <span><i className={w.line} style={{ borderColor: 'var(--color-text-muted)' }}></i>Август</span>
                    </div>
                    <button type="button" className={w.tableBtn} aria-pressed="false">Таблица</button>
                </div>
            </div>
            <div className={`${w.chart} ${w.tall}`} role="img" aria-label="Расходы нарастающим итогом за сентябрь и август"></div>
            <div className={w.stats}>
                <div><small>Потрачено к сегодняшнему дню</small><b>25&nbsp;899&nbsp;₽</b></div>
                <div><small>В среднем в день</small><b>1&nbsp;233&nbsp;₽</b></div>
                <div><small>Осталось дней</small><b>9</b></div>
                <div><small>Август целиком</small><b>34&nbsp;829&nbsp;₽</b></div>
            </div>
        </section>
    )
}
