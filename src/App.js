import React,{useState} from "react"
import AddItem from "./AddItem";
import Item from "./Item";
import "./app.css"

function App() {

  let[inputValue,setValue]=useState("")
  let[items,setItem]=useState([])

  const addNewItem=()=>{
    if(inputValue.length!=0){
      setItem((prev) =>{
        return prev.concat(inputValue)
      })
      setValue("")
    }
  }

  const onChangeHandler=(event)=>{
    setValue(event.target.value)
  }

  const deleteItem=(id)=>{
    console.log("id is: "+id);
    setItem((prev)=>{
     return( prev.filter((currEle,index)=>{
        return index!=id
      }))
    })
  }

  return (
    <div className="container">
      <div className="header">
        <h1>ToDo List</h1>
      </div>
      <div className='items'>
        <AddItem onChange={onChangeHandler} value={inputValue} addItem={addNewItem}/>
        <ul>
          {
            items.map((currentValue,index)=>{
              return(<Item key={index} id={index} text={currentValue} onSelect={deleteItem}/>)
            })
          }
          
        </ul>
      </div>
    </div>
  );
}

export default App;
