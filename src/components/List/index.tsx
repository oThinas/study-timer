import { Task } from './Task'

import { ITask } from '../../types/task'

import style from './List.module.scss'

interface ListProps {
  tasks: ITask[]
}

export function List(props: ListProps) {
  return (
    <aside className={style.listTasks}>
      <h2>Tarefas do dia</h2>
      <ul>
        {props.tasks.map((task, index) => (
          <Task
            key={index}
            /* name={task.name}
            time={task.time} */
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}