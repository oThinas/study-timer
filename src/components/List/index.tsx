import style from './List.module.scss'
import { Task } from './Task'

export function List() {
  const tasks = [
    {
      name: 'React',
      time: '02:00:00'
    },
    {
      name: 'TypeScript',
      time: '01:00:00'
    },
    {
      name: 'JavaScript',
      time: '00:30:00'
    }
  ]
  
  return (
    <aside className={style.listTasks}>
      <h2>Tarefas do dia</h2>
      <ul>
        {tasks.map((task, index) => (
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