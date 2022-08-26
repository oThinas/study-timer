import { Button } from "../Button";

import style from './Form.module.scss'

export function Form() {
  return(
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          required
          autoComplete="off"
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
          required
          autoComplete="off"
        />
      </div>
      <Button />
    </form>
  )
}
