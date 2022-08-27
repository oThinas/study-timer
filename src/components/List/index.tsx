import { Task } from './Task'

import { ITask } from '../../types/task'

import style from './List.module.scss'

interface ListProps {
  tasks: ITask[],
  selectedTask: (selectedTask: ITask) => void,
  isTimerRunning: boolean
}

export function List(props: ListProps) {
  return (
    <aside className={style.listTasks}>
      <h2>Tarefas do dia</h2>
      <ul>
        {props.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            selected={props.selectedTask}
            isTimerRunning={props.isTimerRunning}
          />
        ))}
      </ul>
    </aside>
  )
}