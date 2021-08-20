import React, { useState } from 'react'
import { Todolist } from './Todolist';

const App = () => {
  const [inputlist, setinputlist] = useState();
  const [items, setitems] = useState([]);


  const itemEvent = (eve) => {
    setinputlist(eve.target.value)
  }

  // add button 
  const addbtn = () => {
    setitems((olditems) => {
      // old data ayga , fir new item jo add krege to fir se array me store ho jayga 
      return [...olditems, inputlist]
    })
    setinputlist('')
  }


  // deletebtn 

  const deletebtn=(id)=>{
    // filter for identifying id of element which is clicked that will be deleted 
    setitems((olditems) => {
      return olditems.filter((arrele, index)=>{
        return index!== id;  //jo match ho jayga index number or id  to vo delete 

      })
    })
}

  return (
    <>
      <div className="maindiv">
        <div className="centerdiv">
          <div className="header">
            <h1>Todo</h1>
          </div>
          <br />
          <div className="inputarea">
            <input type="text" placeholder="Enter text here" value={inputlist} onChange={itemEvent} />
            <button className="additembtn" onClick={addbtn}><i class="fas fa-plus"></i></button>
          </div>
          <div className="outputarea">
            <ul>
              {/* <li>{inputlist}</li> */}

              {/* map method for showing each list */}
              {items.map((itemvalue, index) => {
                return <Todolist id={index} key={index} text={itemvalue} onSelect={deletebtn} />

              })}

            </ul>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
