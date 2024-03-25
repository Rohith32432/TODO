import React, { useEffect, useState } from 'react';
import '../assets/todo.css'
import { FaEdit, FaRegEdit } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";


function Listitems({ name, id, remove, onup, ondown,edit }) {
  const del = () => {
    remove(name);
  };


  const [isDone, setIsDone] = useState(true);

  const toggleDone = () => {
    setIsDone(!isDone);
  };
  

const mystyle = {
  color: isDone ? '' : 'red',
  // backgroundColor: randomcolor()
};
  return (
    <>
      <div className="list" style={mystyle} >
        <h3> {isDone?name:<del>{name}</del>}</h3>
        <div className="operations">
        <span onClick={() => onup(id)}><FaArrowUpLong/></span>
        <span onClick={() => ondown(id)}><FaArrowDownLong/></span>
        <span onClick={del}><MdDelete/></span>
        <span onClick={toggleDone}><MdDone/></span>
        <span onClick={()=>edit(id)}><FaEdit/></span>
        </div>
      </div>
    </>
  );
}

export default Listitems;
