// Functional Component

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
    <aside>
      <h2>Tarefas do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}