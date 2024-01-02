import React from 'react'

import { useState,useEffect } from 'react'
function Effect() {
    
  const [api,setapi]=useState({})
  useEffect(()=>{
    async function show(){
      const request=await fetch('https://jsonplaceholder.typicode.com/posts')
      const response =await request.json()
      setapi(response)

    }
    show()
  },[])
  return (
    <div>
          <h2>API Data:</h2>
        <pre>{JSON.stringify(api, null, 2)}</pre>
    </div>
  )
}

export default Effect