// import React, { useState } from 'react'

import { findRenderedComponentWithType } from "react-dom/test-utils";

// function Hooks() {
//     let na="safiruddin Ansari"
// const[name,setName]=useState(na)
// const Handle=()=>{

//     setName("Iquabal Ansari")
// }


//   return (
//     <>

// <h1>hello dear:  {name}</h1>
// <button onClick={Handle}>update data</button>


//     </>
//   )
// }

// export default Hooks

                          ///////form validation in ract                     ==>>(again repeat react video 10)<<==

import React, { useState } from 'react'
function Hooks() {
    const[state,setState]=useState({
        name:"",email:"",password:""
    })
    const[nameMessage,setNameMessage]=useState("")
    const[emailMessage,setEmailMessage]=useState("")
    const[passwordMessage,setPasswordMessage]=useState("")
var handler=(e)=>{
setState({...state,[e.target.name]:e.target.value})
}
let submitData=(e)=>{
e.preventDefault();
const[name,email,password]=state
let nameExg=/^[a-zA-Z]+ [a-zA-Z]+$/
if(name===""){
    setNameMessage("not fil")
    return false;
}
else if(!nameExg.test(name)){
    setNameMessage("numeric character fil")
    return false;
}
else{
    setNameMessage("") 
}



console.log(state)


}
  return (
    <>
    <section className=' container my-5'>
    <div className='row'>
       <div className='col-sm-8 col-md-8'>
         <form>
          Name:<input type="text" name="name" className="form-control"  value={state.name} onClick={handler} />
          <div style={{color:"red"}}>{nameMessage}</div>
          Email:<input type="email" name='email' className="form-control"/>
          <div style={{color:"red"}}>{emailMessage}</div>
          password:<input type="password" name='password' className="form-control"/>
          <div style={{color:"red"}}>{passwordMessage}</div>
           <button type="button" onClick={submitData} >Submit</button>
         </form>
       </div>
     </div>
</section>
   </> 
  )
}

export default Hooks