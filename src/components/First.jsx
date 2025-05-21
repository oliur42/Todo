'use client'
import React, { useState } from 'react'

function First() {
    const[item,setItem]=useState({name:"",email:""})
    const[itemList,setItemList]=useState([])
    const[editValue,setEditValue]=useState({name:"",email:""})
    const[editIndex,setEditIndex]=useState(null)
    const[newError,setNewError]=useState(false)

    const handleAdd=()=>{
        if(item.name === "" || item.email ===""){
           setNewError(true)
        }
            else{setItemList([...itemList,item])
        setItem({name:"",email:""})
        setNewError(false)
    }
    }
    const handleDelete=(index)=>{
        setItemList(itemList.filter((_,i)=> i!==index))
    }
    const handleEdit = (index) => {
    setEditIndex(index)
    setEditValue(itemList[index])
   }
 
    const handleSave=(index)=>{
        const updatedList=[...itemList]
        updatedList[index]=editValue
        setItemList(updatedList)
        setEditIndex(null)
        setEditValue('')
    }
  return (
    <div className='bg-gray-900  justify-center items-center  flex h-screen p-4 w-full'>
        <div>
              <h1 className=' text-white text-center pb-4 text-[35px]'>Welcome to my todo</h1>
            <div className=' flex gap-4 '>
                <div>
                <input className='bg-amber-200 w-[250px] p-2 outline-none ' value={item.name} onChange={(e)=>setItem({...item,name:e.target.value})} type="text" placeholder='' /> 
                {item.name == "" && newError && <p className="text-red-600">Name is empty</p>}

                </div>
           <div> <input className='bg-amber-200 w-[250px] p-2  outline-none' value={item.email} onChange={(e)=>setItem({...item,email:e.target.value})} type="text" placeholder='' />
                           {item.email == "" && newError && <p className="text-red-600">Email is empty</p>}
</div>
            <div><button className='bg-green-700 p-2 text-white inline-block' onClick={handleAdd}>ADD</button></div>
           </div>
           <div>
            {itemList.length===0?(<p></p>)
            : itemList.map((item,index)=>(
                <div key={index}>
                    {editIndex==index?(
                        <form className='flex gap-4 py-4'>
                        <input className='bg-amber-200 w-[250px] p-2 outline-none ' value={editValue.name} onChange={(e)=>setEditValue({...editValue,name:e.target.value})} type="text" placeholder='EditValue'/>
                        <input className='bg-amber-200 w-[250px] p-2 outline-none ' value={editValue.email} onChange={(e)=>setEditValue({...editValue,email:e.target.value})} type="text" placeholder='EditValue'/>
                        <button className='bg-green-700 p-2 text-white' onClick={()=>handleSave(index)}>Save</button>
                        <button className='bg-green-700 p-2 text-white' onClick={()=>setEditIndex(null)}>Cancel</button>
                        </form>
                    ):
                       <div className='flex gap-4 py-4'>
                        <p className='text-white flex gap-4 bg-amber-700 w-[500px] p-2 '><span>{index+1}.{item.name}</span>   <span>{item.email}</span></p>
                        <div className='flex gap-4'>
                            <button className='bg-green-700 p-2 text-white' onClick={()=>handleEdit(index)}>Edit</button>
                            <button className='bg-green-700 p-2 text-white' onClick={()=>handleDelete(index)}>Delete</button>
                        </div>
                       </div>
                }
                </div>
            ))
            }
        </div>
        </div>
        
        
    </div>
  )
}

export default First