import React, {useState} from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormField from './components/FormField';
import Tasks from './components/Tasks';
const App = () => {

  const [data,setData] = useState([
    {id: 1, activity: 'test1', hours: '1', minutes: '30', ampm: 'am', completed: true},
    {id: 2, activity: 'test2', hours: '1', minutes: '30', ampm: 'am', completed: false},
    {id: 3, activity: 'test3', hours: '1', minutes: '30', ampm: 'am', completed: false},
    {id: 4, activity: 'test4', hours: '1', minutes: '30', ampm: 'am', completed: false},
    {id: 5, activity: 'test4', hours: '1', minutes: '30', ampm: 'am', completed: false},
    {id: 6, activity: 'test4', hours: '1', minutes: '30', ampm: 'am', completed: false},
  
  ])

  useEffect(() =>{

  },[setData])

  const [form, setForm] = useState({
    activity: '',
    hours:'',
    minutes: '',
    ampm: ''

  })

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log(form)
  }
  
  const handleChange = (e) =>{
    e.preventDefault()
    setForm({...form, [e.target.name]:e.target.value})

  }

  const onClear = (e) =>{
    setForm({...form,
      activity: '',
      hours:'',
      minutes: '',
      ampm: ''

    })
  }

  const handleDelete = (e) =>{
    console.log(e)
    setData(data.filter((item) => item.id !== e)
    )
  }

  const handleComplete = (e) =>{
        setForm({...form, completed: true})
        console.log(form)
  }

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setData(updatedTodos);
  }


  return (
    <BrowserRouter>
      <header className='flex justify-between items-center px-8 py-4 w-full bg-slate border-b border-b-[#e6d7e0] shadow-md'>
        <p className='font-semibold text-[18px]'>cruzdeveloped</p>
        <div className='flex items-center items-between gap-4'>
          <p className='text-xs font-thin'>Hello,<span className='text-sm ml-1 font-semibold'>User!</span></p>
          <button className='font-medium text-white px-4 py-2 bg-[#04aadb] hover:bg-[#217893] rounded-md shadow-md'>Logout</button>
        </div>
      </header>
      <main className='flex items-center justify-center py-24 w-full min-h-[calc(100vh-73px)] bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl'>
          <div className='flex relative flex-col bg-white w-4/12 h-full border-2 rounded-lg ' >
            <div className='absolute top- px-4 py-1 -left-4 -top-4 rounded-lg bg-blue-300 shadow-lg'>
                <p className='text-3xl text-white font-extrabold'>TASK</p>
            </div>
            <form onSubmit={onSubmit} className='flex flex-col py-10 px-4 z-10 '>
              <FormField
                value={form}
                handleChange={handleChange}
                onSubmit={onSubmit}
                onClear={onClear}
              />
            </form> 
            {data ? (
               <div className='flex flex-col shadow-lg w-full'>
                   {data.map((item)=>{
                      return(
                      <div key={item.id}>
                        <Tasks 
                          handleDelete={handleDelete} 
                          item={item}
                          update={update}
                          setData={setData}
                          handleComplete={handleComplete}
                        />
                      </div>
                      )
                   })}
              </div>
            )

            :(
              <div>
                <p>No</p>
              </div>
            )}

          </div>
      </main>
    </BrowserRouter>
  )
}

export default App