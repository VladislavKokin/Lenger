import styles from './analytics.module.css'

export const Analytics = () => {
    return (
        <section className={styles.analytics}>
            <div className="card-head">
                <b>Аналитика за сентябрь</b>
                <div className={styles.anSum}>
                    <span>Доходы<em className={styles.pos}>+62&nbsp;000&nbsp;₽</em></span>
                    <span>Расходы<em>38&nbsp;740&nbsp;₽</em></span>
                    <span>Остаток<em>23&nbsp;260&nbsp;₽</em></span>
                </div>
            </div>
            <div className={styles.anBody}>
                <svg className={styles.donut} viewBox="0 0 132 132" role="img" aria-label="Расходы по категориям за сентябрь">
                    <circle className={styles.track} cx="66" cy="66" r="47.52" />
                    <circle className={styles.seg} cx="66" cy="66" r="47.52" strokeDasharray="92.93 205.65" strokeDashoffset="0" transform="rotate(-90 66 66)" style={{ stroke: 'var(--color-cat-blue)' }} />
                    <circle className={styles.seg} cx="66" cy="66" r="47.52" strokeDasharray="49.77 248.81" strokeDashoffset="-95.57" transform="rotate(-90 66 66)" style={{ stroke: 'var(--color-cat-orange)' }} />
                    <circle className={styles.seg} cx="66" cy="66" r="47.52" strokeDasharray="68.27 230.31" strokeDashoffset="-147.98" transform="rotate(-90 66 66)" style={{ stroke: 'var(--color-cat-teal)' }} />
                    <circle className={styles.seg} cx="66" cy="66" r="47.52" strokeDasharray="36.95 261.63" strokeDashoffset="-218.88" transform="rotate(-90 66 66)" style={{ stroke: 'var(--color-cat-amber)' }} />
                    <circle className={styles.seg} cx="66" cy="66" r="47.52" strokeDasharray="26.37 272.21" strokeDashoffset="-258.19" transform="rotate(-90 66 66)" style={{ stroke: 'var(--color-cat-pink)' }} />
                    <circle className={styles.seg} cx="66" cy="66" r="47.52" strokeDasharray="11.59 286.99" strokeDashoffset="-286.25" transform="rotate(-90 66 66)" style={{ stroke: 'var(--color-cat-green)' }} />
                    <text className={styles.donutValue} x="66" y="64" textAnchor="middle">38&nbsp;740&nbsp;₽</text>
                    <text className={styles.donutLabel} x="66" y="80.5" textAnchor="middle">расходы</text>
                </svg>
                <ul className={styles.legend}>
                    <li><button type="button"><i style={{ background: 'var(--color-cat-blue)' }}></i><span>Продукты</span><small>32%</small><em>12&nbsp;400&nbsp;₽</em></button></li>
                    <li><button type="button"><i style={{ background: 'var(--color-cat-orange)' }}></i><span>Транспорт</span><small>18%</small><em>6&nbsp;800&nbsp;₽</em></button></li>
                    <li><button type="button"><i style={{ background: 'var(--color-cat-teal)' }}></i><span>Дом</span><small>24%</small><em>9&nbsp;200&nbsp;₽</em></button></li>
                    <li><button type="button"><i style={{ background: 'var(--color-cat-amber)' }}></i><span>Кафе</span><small>13%</small><em>5&nbsp;100&nbsp;₽</em></button></li>
                    <li><button type="button"><i style={{ background: 'var(--color-cat-pink)' }}></i><span>Развлечения</span><small>9%</small><em>3&nbsp;640&nbsp;₽</em></button></li>
                    <li><button type="button"><i style={{ background: 'var(--color-cat-green)' }}></i><span>Прочее</span><small>4%</small><em>1&nbsp;600&nbsp;₽</em></button></li>
                </ul>
                <div className={styles.barsBox}>
                    <div className={styles.keys}>
                        <span><i style={{ background: 'var(--color-chart-income)' }}></i>Доходы</span>
                        <span><i style={{ background: 'var(--color-chart-expense)' }}></i>Расходы</span>
                    </div>
                    <svg className={styles.bars} viewBox="0 0 300 120" role="img" aria-label="Доходы и расходы по месяцам">
                        <line className={styles.grid} x1="6" x2="294" y1="102" y2="102" />
                        <line className={styles.grid} x1="6" x2="294" y1="55" y2="55" />
                        <line className={styles.grid} x1="6" x2="294" y1="8" y2="8" />

                        <path className={styles.inc} d="M13.14,102V29.19Q13.14,26.19 16.14,26.19H25.5Q28.5,26.19 28.5,29.19V102Z" />
                        <path className={styles.exp} d="M31.5,102V61.2Q31.5,58.2 34.5,58.2H43.86Q46.86,58.2 46.86,61.2V102Z" />
                        <text className={styles.tick} x="30" y="116" textAnchor="middle">Апр</text>

                        <path className={styles.inc} d="M61.14,102V23.58Q61.14,20.58 64.14,20.58H73.5Q76.5,20.58 76.5,23.58V102Z" />
                        <path className={styles.exp} d="M79.5,102V53.76Q79.5,50.76 82.5,50.76H91.86Q94.86,50.76 94.86,53.76V102Z" />
                        <text className={styles.tick} x="78" y="116" textAnchor="middle">Май</text>

                        <path className={styles.inc} d="M109.14,102V36.21Q109.14,33.21 112.14,33.21H121.5Q124.5,33.21 124.5,36.21V102Z" />
                        <path className={styles.exp} d="M127.5,102V63.17Q127.5,60.17 130.5,60.17H139.86Q142.86,60.17 142.86,63.17V102Z" />
                        <text className={styles.tick} x="126" y="116" textAnchor="middle">Июн</text>

                        <path className={styles.inc} d="M157.14,102V19.37Q157.14,16.37 160.14,16.37H169.5Q172.5,16.37 172.5,19.37V102Z" />
                        <path className={styles.exp} d="M175.5,102V48.71Q175.5,45.71 178.5,45.71H187.86Q190.86,45.71 190.86,48.71V102Z" />
                        <text className={styles.tick} x="174" y="116" textAnchor="middle">Июл</text>

                        <path className={styles.inc} d="M205.14,102V24.98Q205.14,21.98 208.14,21.98H217.5Q220.5,21.98 220.5,24.98V102Z" />
                        <path className={styles.exp} d="M223.5,102V55.59Q223.5,52.59 226.5,52.59H235.86Q238.86,52.59 238.86,55.59V102Z" />
                        <text className={styles.tick} x="222" y="116" textAnchor="middle">Авг</text>

                        <path className={styles.inc} d="M253.14,102V17.96Q253.14,14.96 256.14,14.96H265.5Q268.5,14.96 268.5,17.96V102Z" />
                        <path className={styles.exp} d="M271.5,102V50.62Q271.5,47.62 274.5,47.62H283.86Q286.86,47.62 286.86,50.62V102Z" />
                        <text className={styles.tick} x="270" y="116" textAnchor="middle">Сен</text>

                        <line className={styles.axis} x1="6" x2="294" y1="102" y2="102" />
                    </svg>
                    <div className={styles.readout}>Сен: доход <b>62&nbsp;000&nbsp;₽</b>, расход <b>38&nbsp;740&nbsp;₽</b></div>
                </div>
            </div>
        </section>
    )
}
