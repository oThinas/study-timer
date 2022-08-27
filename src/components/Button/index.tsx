import { ReactNode } from 'react'
import style from './Button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void,
  children: ReactNode,
  isTimerRunning?: boolean
}

export function Button({type = 'button', onClick, children, isTimerRunning}: ButtonProps) {
  return(
    <button
      type={type}
      className={`${style.button} ${isTimerRunning && style.buttonBlocked}`}
      onClick={onClick}
      disabled={isTimerRunning}
    >
      {children}
    </button>
  )
}