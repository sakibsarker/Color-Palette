import './App.css';
import React, { useState } from 'react'
import Values from 'values.js';
import SingleColor from './SingleColor';
function App() {
  const[color,setColor]=useState('')
  const[error,setError]=useState(false)
  const[list,setList]=useState(new Values('#0000e6').all(5))

  const handelSUbmit=event=>{
    event.preventDefault();
    try{

      let colors=new Values(color).all(5)
      setList(colors)

    }catch(error){
      setError(true)
      console.log(error);

    }
    
  }

  return (
   <>
   <section className='container'>
    <h3>C o l o r Palette</h3>
    <form onSubmit={handelSUbmit}>
      <input type='text' value={color} 
      onChange={(event)=>setColor(event.target.value)}
      placeholder="#0000e6"
      className={`${error?'error':null}`}/>
      <button className='btn' type='submit'>
        submit
      </button>
    </form>
    
    </section>
    <section className='colors'>
      {list.map((color,index)=>{
      
        return<SingleColor key={index}{...color} 
        index={index} hexColor={color.hex}/>
      })}

    </section>
    </>
  )
}

export default App
