import { useState } from 'react';

import { Form } from '../components/Form';
import { List } from '../components/List';
import { Timer } from '../components/Timer';

import { ITask } from '../types/task';

import style from  '../styles/pages.module.scss'

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  
  return (
    <div className={style.main}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}
