import { ITask } from '../../../types/task'
import style from './Task.module.scss'

interface TaskProps {
  task: ITask
  selected: (selectedTask: ITask) => void
}

export function Task(props: TaskProps) {
  return(
    <li className={`${style.task} ${props.task.selected && style.taskSelected}`} onClick={() => props.selected(props.task)}>
      <h3>{props.task.name}</h3>
      <span>{props.task.time}</span>
    </li>
  )
}