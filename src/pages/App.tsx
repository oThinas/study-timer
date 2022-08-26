import { Form } from '../components/Form';
import { List } from '../components/List';
import { Timer } from '../components/Timer';

import style from  '../styles/pages.module.scss'

export function App() {
  return (
    <div className={style.main}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}
