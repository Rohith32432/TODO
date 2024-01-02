// App.js
import React, { useContext, useState } from 'react';
import './App.css';
import Additems from './additems';
import Listitems from './Listitems';
import Reducer from './hooks/reducer';
import { createMyContext, name } from './hooks/contex'; // Import the function, not the context directly
import { setlocal } from './hooks/customhook'
import Maincontext from './maincontext';
import Nodecontext from './hooks/prwaticecontext';
// Call the function to get the context
const MyContext = createMyContext();
console.log(MyContext);

function App() {
  const [data, setdata] = useState([]);

  // Use the context value
  const uname = useContext(MyContext);
  console.log(uname);
  const nname = useContext(name);
  console.log(nname);
  let c = 0
  const save = (info) => {
    if (!data.includes(info))
      setdata([...data, info]);
    setlocal(info)
  };

  const del = (name) => {
    setdata(data.filter((d) => d !== name));
  };

  const forward = (id) => {
    if (id > 0) {
      const newData = [...data];
      const temp = newData[id];
      newData[id] = newData[id - 1];
      newData[id - 1] = temp;
      setdata(newData);
    }
  };

  const backword = (id) => {
    if (id < data.length - 1) {
      const newData = [...data];
      const temp = newData[id];
      newData[id] = newData[id + 1];
      newData[id + 1] = temp;
      setdata(newData);
    }
  };
  
  let getcon = useContext(Nodecontext);
  // console.log(getcon.name);

  return (
    <>
      <div className='todo'>
        <h1>To Do</h1>
        <Additems adddata={save} />
        {data.map((dat, index) => (
          <Listitems key={index} id={index} name={dat} remove={del} onup={forward} ondown={backword} />
        ))}
      </div>
      <Maincontext>
        {/* <Effect /> */}
        <Reducer />
        {/* Display the context value */}
        <p>{uname}</p>
        <p>{name}</p>
      </Maincontext>
    </>
  );
}

export default App;
