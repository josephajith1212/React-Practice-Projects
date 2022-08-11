import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(JSON.parse(localStorage.getItem("list"))||[]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'please enter a value')
    }
    else if (name && isEditing) {
      setList(list.map(item => {
        if(item.id === editID) return {...item, title: name}
        return item
      }))
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'edited item')
    }
    else {
      showAlert(true, 'success', 'new item added')
      const newItem = {id: Date.now().toString(), title: name}
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show=false, type='', msg='') => {
    setAlert({show,type,msg})
  }

  const removeAlert = () => setAlert({show:false, type:'', msg:''})
  
  const clear = () => {
    showAlert(true,'danger','list empty')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id != id))
  }

  const editItem = (id) => {
    setName((list.find(item => item.id === id)).title)
    setIsEditing(true)
    setEditID(id)
  }

  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(list))
  },[list])
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={removeAlert} list={list}/>}
        <h3>Grocery list</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g.: eggs' value={name} onChange={e => setName(e.target.value)} />
          <button className="submit-btn" type='submit'>{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {list.length > 0 && 
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clear}>clear items</button>
        </div>
      }
    </section>
  )
}

export default App
