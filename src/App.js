import React, { useState } from 'react';
import './assets/todo.css'
import './App.css'
import Additems from './Components/additems';
import Listitems from './Components/Listitems';


function App() {
  const [data, setdata] = useState([]);
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
  const [editname,setename]=useState('')
  function update(name){
    console.log(name);
    setename(name)
  }


  return (
    <>
      <div className="App">
        <div className='todo'>
          <h1>To Do</h1>
          <Additems adddata={save} update={editname} />
          <div className="main-list">
 
          {data.map((dat, index) => (
            <Listitems key={index} id={index} name={dat} remove={del} edit={update} onup={forward} ondown={backword} />
          ))}
          </div>
        
        </div>
      </div>

    </>
  );
}

export default App;
