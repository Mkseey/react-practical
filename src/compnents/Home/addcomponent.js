
import { useState } from "react";
function Addcomponent({ addTodo }) {
      const [value, setValue] = useState("");
      const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };
    
      return (
       
         <div className="card col-5 ms-4">
                      <h6>Please add your items</h6>
                      <div>
                         <input
                             className="card-center mt-2   "
                             type="text"
                             value={value}
                             onChange={(event) => setValue(event.target.value)}
                             placeholder=" An item name..."
                         />
                         <button
                             className=" btn btn-primary mt-2 mb-2 btn-sm  "
                             type="button"
                             onClick={handleSubmit}
         
                         >
                             <b>Add</b>
                         </button>
                     </div>
                 </div>
      );
    }

export default Addcomponent;