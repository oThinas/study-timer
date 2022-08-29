import { useEffect, useState } from "react";

import { Button } from "../Button";

import { ITask } from "../../types/task";
import { handleConvertTimeInSeconds as timeInSeconds } from '../../common/utils/time'

import style from './Timer.module.scss'

interface TimerProps {
  selectedTask: ITask | undefined,
  endTimer: () => void,
  setIsTimerRunning: React.Dispatch<React.SetStateAction<boolean>>,
  isTimerRunning: boolean
}

export function Timer(props: TimerProps) {
  const [time, setTime] = useState<number>()
  useEffect(() => {
    if(props.selectedTask?.time)
      setTime(timeInSeconds(String(props.selectedTask.time)))
  }, [props.selectedTask])

  const ONE_HOUR_IN_SECONDS = 3600
  const ONE_HOUR_IN_MINUTES = 60
  const ONE_MINUTE_IN_SECONDS = 60

  const hours = Math.floor(time! / ONE_HOUR_IN_SECONDS)
  const minutes = Math.floor((time! - hours * ONE_HOUR_IN_SECONDS) / ONE_HOUR_IN_MINUTES)
  const seconds = time! % ONE_MINUTE_IN_SECONDS

  const [hoursTens, hoursUnits] = String(hours)
  const [minutesTens, minutesUnits] = String(minutes)
  const [secondsTens, secondsUnits] = String(seconds)

  function handleStartTimer(timer: number = 0) {
    if (timer !== 0)
      props.setIsTimerRunning(true)
    setTimeout(() => {
      if (timer > 0) {
        setTime(timer - 1)
        return handleStartTimer(timer - 1)
      }
      props.endTimer()
    }, 1000)
  }
  
  return(
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.display}>
        <span className={style.digits}>{(!hours || hours < 10) ? '0' : hoursTens}</span>
        <span className={style.digits}>{!hours ? '0' : (hours < 10 ? hours : hoursUnits)}</span>
        <span className={style.divider}>:</span>
        <span className={style.digits}>{(!minutes || minutes < 10) ? '0' : minutesTens}</span>
        <span className={style.digits}>{!minutes ? '0' : (minutes < 10 ? minutes : minutesUnits)}</span>
        <span className={style.divider}>:</span>
        <span className={style.digits}>{(!seconds || seconds < 10) ? '0' : secondsTens}</span>
        <span className={style.digits}>{!seconds ? '0' : (seconds < 10 ? seconds : secondsUnits)}</span>
      </div>
      <Button
        onClick={() => handleStartTimer(time)}
        isTimerRunning={props.isTimerRunning}
      >
        Iniciar
      </Button>
    </div>
  )
}