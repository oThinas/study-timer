import { Button } from "../Button";

import style from './Timer.module.scss'

export function Timer() {
  return(
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.display}>
        <span className={style.digits}>0</span>
        <span className={style.digits}>0</span>
        <span className={style.divider}>:</span>
        <span className={style.digits}>0</span>
        <span className={style.digits}>0</span>
        <span className={style.divider}>:</span>
        <span className={style.digits}>0</span>
        <span className={style.digits}>0</span>
      </div>
      <Button>
        Iniciar
      </Button>
    </div>
  )
}