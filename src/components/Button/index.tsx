import { ReactNode } from 'react'
import style from './Button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  children: ReactNode
}

export function Button({type = 'button', children}: ButtonProps) {
  
  return(
    <button type={type} className={style.button}>
      {children}
    </button>
  )
}