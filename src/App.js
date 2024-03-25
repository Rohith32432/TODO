import React, { useState } from 'react';
import './assets/todo.css'
import './App.css'
import Additems from './Components/additems';
import Listitems from './Components/Listitems';


function App() {
  const [data, setdata] = useState([]);
  const save = (info,id) => {
    if (id ==null && !data.includes(info) && info!='') 
      setdata([...data, info]);
    else {
      const newData = [...data]
      newData[id]=info
      setdata(newData)
    }
  }

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
  const[id,setd]=useState(0)
  function update(id){
    setename(data[id])
    setd(id)
  }


  return (
    <>
      <div className="App">
        <div className='todo'>
          <h1>To Do</h1>
          <Additems adddata={save} update={editname} setupdate={setename} id={id}/>
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
