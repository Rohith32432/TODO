import React, { useEffect, useState } from 'react';
import '../assets/todo.css';

function Additems({ adddata, update }) {
  const [item, setItem] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    setItem(value);

  };

  const setItems = (e) => {
    e.preventDefault();
    adddata(item);  
    setItem('');
  };
useEffect(()=>{
  if(update) setItem(update)
},[update])
  return (
    <div className='additems'>
      <form>
        <input
          type="text"
          name='item-name'
          onChange={handleChange}
          value={item}
        />
        <button type='submit' onClick={setItems}>{!update.length>0 ? 'Add Item':'Update'}</button>
      </form>
    </div>
  );
}

export default Additems;
