import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setToDos]= useState([])
  const [toDo,setToDo]= useState('')
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[new Date().getDay()];
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>My ToDos</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDay} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} onKeyDown={(e) => {
            if (e.key === 'Enter' && toDo.trim()) {
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
              setToDo(''); // Clear the input after adding
            }
          }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
              setToDo(''); // Clear the input after adding
            }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      { toDos.map((obj)=>{
        return (
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                if (obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }
              ))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i  onClick={() => {
                    setToDos(toDos.filter((obj2) => obj2.id !== obj.id));
                  }} className="fas fa-times"></i>
          </div>
        </div> )
        })
      }
      <br/>
      <h1>Active task</h1>
      { toDos.map((obj)=>{
        if(obj.status){
          return <h2>{obj.text}</h2>
        }
        return null
      })

      }
      </div>
    </div>
  );
}

export default App;
