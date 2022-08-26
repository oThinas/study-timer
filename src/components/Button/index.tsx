import { ReactNode } from 'react'
import style from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
}

export function Button(props: ButtonProps) {
  return(
    <button className={style.button}>
      {props.children}
    </button>
  )
}