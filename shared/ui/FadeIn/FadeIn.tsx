import type { ElementType, ReactNode } from 'react'
import styles from './FadeIn.module.css'

type FadeInProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

export const FadeIn = ({ as: Tag = 'div', className, children }: FadeInProps) => {
  return <Tag className={className ? `${styles.root} ${className}` : styles.root}>{children}</Tag>
}
