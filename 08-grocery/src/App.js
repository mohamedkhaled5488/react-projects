import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [item,setitem]=useState([])
  const [nextitem,setnexitem]=useState('');
  const[isEditing,setIsEditing]=useState(false)
  const[alert,setAlert]=useState({show:false,mas:''})
  const [editID, setEditID] = useState(null);

  const handleclick = (e)=>{
    e.preventDefault();
    if(!nextitem){
    setAlert({show:true,mas:'please add item '})
    }
    else if (nextitem&&isEditing) {
      setitem(
        item.map((newitem) => {
          if (newitem.id==editID) {
            return {...newitem , title: nextitem };
          }
          return newitem
        })
      )
      setnexitem('')
      setEditID(null)
      setIsEditing(false)
     
    } else {
    let  newitem = {id: new Date().getTime().toString(),title:nextitem }
      setitem([...item,newitem])
      setnexitem('')
    }
  }
  useEffect(()=>{
 setTimeout(()=>{
 setAlert({show:false})
},4000)
 
return clearTimeout()

  },[alert])
  const removeitem = (id)=>{
  
 setitem(item.filter((word)=>word.id !== id))
  }
  const edititem = (id)=>{
    const edititem =item.find((word)=>word.id==id)
    setIsEditing(true)
    setEditID(id)
    setnexitem(edititem.title)
  }
  return (
    <main>
      <div className='container'>
       
       
        <form onSubmit={handleclick}>
  
        { alert.show&&(<p>{alert.mas}</p>)}
     
          <h3>grocery bud</h3>
          <div className='control'>
          <input type='text' value={nextitem} onChange={(e)=>setnexitem(e.target.value)}/>
          <button className='main_btn'>{isEditing?'edit':'submit'}</button>
          </div>
        </form>

        <article>
          {item.length>0&&(
            <List item={item} removeitem={removeitem} edititem={edititem}/>
          )}
          
        </article>
      </div>
    </main>
  )
}

export default App
