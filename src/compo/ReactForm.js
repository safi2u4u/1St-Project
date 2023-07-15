import React, { useState } from 'react'

const ReactForm = () => {
    const [form,setForm]=useState({
        name:"",
        email:""
    })
    const getdata=(e)=>{
        e.preventDefault()

        console.log(form)

    }
    const handlechange =(e)=>{
     setForm({
        ...form,[e.target.name]:e.target.value
     })
    }
  return (
    <div>
        <form onSubmit={getdata}>
            <label>
                Name:
                <input
                type='text'
                name="name"
                placeholder='enter the name'
                value={form.name}
                onChange={handlechange}
                />
            </label>
            <label>
                Name:
                <input
                type='text'
                name="email"
                placeholder='enter the name'
                value={form.email}
                onChange={handlechange}
                />
            </label>
       <button type="submit">submit</button>
        </form>
      
    </div>
  )
}

export default ReactForm
