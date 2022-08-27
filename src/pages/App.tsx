import { useState } from 'react';

import { Form } from '../components/Form';
import { List } from '../components/List';
import { Timer } from '../components/Timer';

import { ITask } from '../types/task';

import style from  '../styles/pages.module.scss'

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()
  
  function handleSelectTask(selectedTask: ITask) {
    setSelected(selectedTask)
    setTasks(tasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
    
    /* 
      Dessa forma, os itens da lista são selecionados com um double-click
    */
    /* setTasks(tasks.map(task => ({
      ...task,
      selected: task.id === selected?.id ? true : false
    }))) */ 
  }

  function handleFinishTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(tasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            done: true
          }
        }
        return task
      }))
    }
  }
  
  return (
    <div className={style.main}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks}
        selectedTask={handleSelectTask}
      />
      <Timer
        selectedTask={selected}
        endTimer={handleFinishTask}
      />
    </div>
  );
}
