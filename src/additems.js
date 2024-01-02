import React, { useState } from 'react'

function Additems({adddata}) {

const [item,setitem]=useState('')

const handlechange=(e)=>{
  let value=e.target.value
   setitem(value)
}
function setitems(e){
    e.preventDefault()
    adddata(item)
}

  return (
    <div>
        <form >
        <input type="text" name='item-name' onChange={handlechange}  value={item}/>
        <button type='submit' onClick={setitems}>ADD-Items</button></form>
    </div>
  )
}

export default Additems