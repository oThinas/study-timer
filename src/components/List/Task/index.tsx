import style from './Task.module.scss'

interface TaskProps {
  name: string,
  time: string
}

export function Task(props: TaskProps) {
  return(
    <li className={style.task}>
      <h3>{props.name}</h3>
      <span>{props.time}</span>
    </li>
  )
}