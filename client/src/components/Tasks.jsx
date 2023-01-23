import React, {useState} from 'react'
import {BsTrash,BsCheckLg} from 'react-icons/bs'
import {MdEdit} from 'react-icons/md'
import EditForm from './EditForm'
import FormField from './FormField'

const Tasks = ({handleDelete, item , handleComplete, setData}) => {

    const [editing , setEditting] = useState(null)

    const [editInfo, setEditInfo] = useState({
        activity: '',
        hours:'',
        minutes: '',
        ampm:''
    })
 
    const handleEdit = (e, activity, hours, minutes, ampm) =>{
        setEditInfo({
            activity,
            hours,
            minutes,
            ampm
        })
        setEditting(e)
    }
    
    const onSubmit = (e) =>{
        console.log(editInfo)
        console.log(item)
        setEditting(null)
    }
    
    return (
        <>
        {editing ? (
            <div className='flex p-4 border-2 justify-between items-center bg-purple-200 ease-in duration-100'> 
               <EditForm
                editInfo={editInfo}
                setEditInfo={setEditInfo}
                setEditting={setEditting}
                item={item}
                onSubmit={onSubmit}
               />
            </div>
        ):(
            <div className={item.completed === true ? `flex p-4 border-2 justify-between items-center bg-red-300 ease-in duration-100 `: 'flex p-4 border-2 justify-between items-center hover:bg-blue-100 ease-in duration-100 '}>
            <div className='flex flex-col'>
            <p className='text-2xl'>{item.activity}</p>
            <div className='text-gray-500 flex items-center gap-2 '>
                <div className='flex items-center justify-between gap-1'>
                    <p className='text-xs font-thin'>time to start: </p>
                    <div className='text-sm font-medium flex gap-1'>
                        <p>{item.hours}</p>
                        <p>:</p>
                        <p>{item.minutes}</p>
                        <p>{item.ampm}</p>
                    </div>
                </div>
            </div>
            </div>  
            <div className='flex text-sm gap-1'>
                <button onClick={(e) => handleComplete(item.id)} className='p-2 bg-green-300 hover:bg-green-400 rounded-sm'><BsCheckLg /></button>
                <button onClick={(e) => handleEdit(item.id, item.activity, item.hours,item.minutes,item.ampm)} className='p-2 bg-purple-200 hover:bg-purple-300 rounded-sm'><MdEdit /></button>
                <button onClick={(e) => handleDelete(item.id)} className='p-2 bg-red-200 hover:bg-red-300 rounded-sm'><BsTrash /></button>
            </div>
        </div>
        )}
            
        </>
    )
}

export default Tasks