import React, { useState } from "react";
import Addcomponent from "./addcomponent";
import ItemList from "./Itemlist";

function Index() {

  const [name, setName] = useState([
    {
      text: "Demo1",

    },
    {
      text: "Demo2",

    },
    {
      text: "Demo1",
    }
  ]);

  const addword = text => {
    const newname = [...name, { text }];
    setName(newname);
  };

  const removeword = index => {
    const newname = [...name];
    newname.splice(index);
    setName(newname);
  };

  return (
    <div>
      <div className='container text-center'>
        <h1>Welcome The Dashboad!</h1>
      </div>

      <Addcomponent addTodo={addword} />

      <h4 className="text-left">
        <b> List </b>
      </h4>

      {name.map((word, index) => (
        <ItemList
          index={index}
          word={word}
          removeword={removeword}
        />
      ))}

    </div>
  );
}

export default Index;




