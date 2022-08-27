import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

import { Button } from "../Button";

import { ITask } from "../../types/task";

import style from './Form.module.scss'

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export function Form(props: FormProps) {

  const [newTaskInfos, setNewTaskInfos] = useState(
    {
      name: "",
      time: "00:00:00"
    }
  )

  function handleCreateTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    props.setTasks((previousTasks) =>
      [
        ...previousTasks, 
        {
          ...newTaskInfos,
          selected: false,
          done: false,
          id: uuid()
        }
      ]
    )
    setNewTaskInfos({
      name: '',
      time: '00:00:00'
    })
  }
  
  return(
    <form className={style.newTask} onSubmit={handleCreateTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Adicione um novo chamado
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Insira o código do chamado"
          title=""
          required
          autoComplete="off"
          value={newTaskInfos.name}
          onChange={event => setNewTaskInfos({...newTaskInfos, name: event.target.value})}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time" />
        <input
          type="time"
          step={1}
          min="00:00:01"
          max="23:59:59"
          id="time"
          name="time"
          title=""
          required
          autoComplete="off"
          value={newTaskInfos.time}
          onChange={event => setNewTaskInfos({...newTaskInfos, time: event.target.value})}
        />
      </div>
      <Button
        type="submit"
      >
        Adicionar
      </Button>
    </form>
  )
}
