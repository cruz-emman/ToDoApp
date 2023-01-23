import React from 'react'
import {AiOutlineCheck, AiOutlineClear} from 'react-icons/ai'
import {BsCheckLg } from 'react-icons/bs'

const FormField = ({handleChange, onClear, onSubmit, setCurrentId}) => {
  return (
    <div className='flex flex-col gap-2'>
    <div>
      <label htmlFor="" className='text-lg font-bold text-gray-400'>Activity</label>
      <input name="activity" onChange={handleChange} className='w-full border px-4 py-2 shadow-md focus:outline-none focus:border-cyan-300' type="text"  />
    </div>

    <div className='flex flex-col xl:flex-row justify-between items-center md:gap-2'>
      <div className='flex w-full flex-col gap-2'>
        <p className='font-semibold text-gray-400'>Time Start: </p>
        <div className='flex w-full flex-col md:flex-row items-center justify-between'>
            <div className='px-4 py-2  border border-sky-100 rounded-lg shadow-2xl'>
            <div className="flex text-md ">
                <select name="hours" onChange={handleChange} defaultValue="00" className=" px-4 bg-transparent appearance-none outline-none">
                <option value="00"  disabled hidden>00</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">10</option>
                <option value="12">12</option>
                </select>
                <span className="text-xl mr-3">:</span>
                <select name="minutes"  defaultValue="" onChange={handleChange} className="px-4 bg-transparent appearance-none outline-none mr-4">
                <option value="0">00</option>
                <option value="30">30</option>
                </select>
                <select name="ampm"  defaultValue="AM/PM" onChange={handleChange} className="px-4 bg-transparent appearance-none outline-none">
                <option  disabled hidden>AM/PM</option>
                <option value="am">AM</option>
                <option value="pm">PM</option>
                </select>
            </div>
            </div>
            <div className=' flex gap-1 px-2 py-1 h-full'>
                <button type="submit" className='flex  ease-in duration-100 rounded-sm text-sm font-semibold text-white items-center justify-center gap-1 px-3 py-0.5 bg-green-500 hover:bg-green-600'>
                Add
                <AiOutlineCheck />
                </button>
                <button onClick={onClear} className='flex ease-in duration-100 rounded-sm text-sm font-semibold text-white items-center justify-center gap-1 px-3 py-0.5 bg-purple-500 hover:bg-purple-600'>
                Clear
                <AiOutlineClear />
                </button>
            </div>

        </div>
        
      </div>
    </div>
  </div>  )
}

export default FormField

