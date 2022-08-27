import { ReactNode } from 'react'
import style from './Button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  children: ReactNode
}

export function Button({type = 'button', onClick, children}: ButtonProps) {
  
  return(
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  )
}