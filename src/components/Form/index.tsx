import { Button } from "../Button";

export function Form() {
  return(
    <form>
      <div>
        <label htmlFor="task">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div>
        <label htmlFor="time" />
        <input
          type="time"
          step={1}
          min="00:00:01"
          max="23:59:59"
          id="time"
          name="time"
          required
        />
      </div>
      <Button />
    </form>
  )
}

// import React from "react";
// import Button from "../Button";

// class Form extends React.Component {
//   render() {
//     return (
//       <form>
//         <div>
//           <label htmlFor="task">
//             Adicione um novo estudo
//           </label>
//           <input 
//             type="text"
//             name="task"
//             id="task"
//             placeholder="O que você quer estudar?"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="time">

//           </label>
//           <input 
//             type="time"
//             step={1}
//             name="time"
//             id="time"
//             min="00:00:00"
//             max="23:59:59"
//             required
//           />
//         </div>
//         <Button />
//       </form>
//     )
//   }
// }

// export default Form;