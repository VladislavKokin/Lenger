import { motion, useReducedMotion } from 'motion/react'
import styles from './AnimatedBackground.module.css'

const ORBIT_DURATION = 40 // секунд на полный круг вокруг страницы
const ORBIT_STEPS = 32 // точек на эллипсе: между ними путь прямой, глазом от дуги не отличить
const START_ANGLE = -Math.PI / 4 // левый верхний угол, как на макете

// Центр пятна обходит эллипс, вписанный в страницу: x — косинус, y — синус одного и того же угла.
// toFixed — чтобы строки, посчитанные на сервере и в браузере, совпали при гидратации.
const orbit = Array.from({ length: ORBIT_STEPS + 1 }, (_, step) => {
  const angle = START_ANGLE + (step / ORBIT_STEPS) * 2 * Math.PI
  const x = 50 - 50 * Math.cos(angle)
  const y = 50 + 50 * Math.sin(angle)

  return `translate(${x.toFixed(2)}vw, ${y.toFixed(2)}vh)`
})

export const AnimatedBackground = () => {
  // При системной настройке «меньше движения» пятно остаётся на стартовом месте
  const reduceMotion = useReducedMotion()

  return (
    <div className={styles.root} aria-hidden="true">
      <motion.span
        className={styles.blob}
        initial={{ transform: orbit[0] }}
        animate={reduceMotion ? undefined : { transform: orbit }}
        transition={{ duration: ORBIT_DURATION, ease: 'linear', repeat: Infinity }}
      />
    </div>
  )
}
