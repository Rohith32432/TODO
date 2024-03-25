// App.js
import React, { useContext, useState } from 'react';
import './App.css';
import Additems from './Components/additems';
import Listitems from './Components/Listitems';


function App() {
  const [data, setdata] = useState([]);


  let c = 0
  const save = (info) => {
    if (!data.includes(info))
      setdata([...data, info]);
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
  


  return (
    <>
    {/* <Navbar/> */}
      <div className='todo'>
        <h1>To Do</h1>
        <Additems adddata={save} />
        {data.map((dat, index) => (
          <Listitems key={index} id={index} name={dat} remove={del} onup={forward} ondown={backword} />
        ))}
      </div>
     
    </>
  );
}

export default App;
