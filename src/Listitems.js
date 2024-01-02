import React, { useState } from 'react';

function Listitems({ name, id, remove, onup, ondown }) {
  const del = () => {
    remove(name);
  };

  const [isDone, setIsDone] = useState(true);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  const mystyle = {
    color: isDone ? 'green' : 'red',
  };

  return (
    <>
      <div className="list" style={mystyle}>
        <h3> {isDone?name:<del>{name}</del>}</h3>
        <button onClick={() => onup(id)}>up</button>
        <button onClick={() => ondown(id)}>down</button>
        <button onClick={del}>close</button>
        <button onClick={toggleDone}>done</button>
      </div>
    </>
  );
}

export default Listitems;
