// import React, { Component } from 'react'        /////////0001

// export default class JsonUser extends Component {
//   state={userdata:[]}
//   componentDidMount(){
//     let url="https://jsonplaceholder.typicode.com/users"
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{console.log(data)
//     this.setState({userdata:data}) 
//     })
//     .catch(()=>console.log("API ERROR"))
//   }
//   render() {
//     return (
//       <>
      

// <table className="table" style={{border: "5px ,red," }} >
// <thead>
//   <tr className="border border-5">
//     <th >sr.no</th>
//     <th >Name</th>
//     <th>Email</th>
//     <th>Address</th>
//   </tr>
// </thead>
// <tbody >{
//   this.state.userdata.map((val,i)=>
//   <tr key={i} className="border border-5 " >
//     <th scope="row">{i+1}</th>
//     <td >{val.name}</td>
//     <td >{val.email}</td>
//     <td>{val.address.city}</td>
//   </tr>
//   )
//   }
// </tbody>
// </table>
      
       
//       </>
     
//     )
//   }
// }

                      /////////news key API///////                       //////////00002


// import React, { Component } from 'react'

// export default class JsonUser extends Component {
//   state={userdata:[]}
//   componentDidMount(){
//     let url="https://jsonplaceholder.typicode.com/users"
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{console.log(data)
//     this.setState({userdata:data}) 
//     })
//     .catch(()=>console.log("API ERROR"))
//   }
//   render() {
//     return (
//       <>
      

// <table className="table" style={{border: "5px ,red," }} >
// <thead>
//   <tr className="border border-5">
//     <th >sr.no</th>
//     <th >Name</th>
//     <th>Email</th>
//     <th>Address</th>
//   </tr>
// </thead>
// <tbody >{
//   this.state.userdata.map((val,i)=>
//   <tr key={i} className="border border-5 " >
//     <th scope="row">{i+1}</th>
//     <td >{val.name}</td>
//     <td >{val.email}</td>
//     <td>{val.address.city}</td>
//   </tr>
//   )
//   }
// </tbody>
// </table>
      
      
//       </>
     
//     )
//   }
// }

////////////changes in button click  -   form handeling/////////////                       000000003

// import React, { Component } from 'react'

// export default class JsonUser extends Component {
//   state={pass:"password",btnText:"Show Passward"}
// handle=()=>{
//   if(this.state.pass==="password"){
//     this.setState({pass:"text",btnText:"Hide Passward"})
//   }
//   else{
//     this.setState({pass:"password",btnText:"Show Passward"})
//   }
// }
//   render() {
//     return (
//       <section className=' container my-5'>
//         <div className='row'>
//           <div className='col-sm-8 col-md-8'>
//             <form>
//               passward:<input type={this.state.pass}/>
//               <button type="button" onClick={this.handle}>{this.state.btnText}</button>
//             </form>

//           </div>

//         </div>
//       </section>
//     )
//   }
// }

                                                   ////////////0000004

  import React, { Component } from 'react'                                          
  
  export default class JsonUser extends Component {
    state={
      name:"",email:"",password:""
    }
    handler=(e)=>{
      console.log(this.setState({[e.target.name]:e.target.value} ))
    }
    handleSubmit=()=>{
    console.log(JSON.stringify(this.state))
    }
    render() {
      return (
       <>
        <section className=' container my-5'>
        <div className='row'>
           <div className='col-sm-8 col-md-8'>
             <form>
              Name:<input type="text" name="name" value={this.state.name} onChange={this.handler}/>
              Email:<input type="email" name='email' value={this.state.email} onChange={this.handler}/>
              password:<input type="password" name='password' value={this.state.password} onChange={this.handler}/>
               <button type="button" onClick={this.handleSubmit}>Submit</button>
             </form>
           </div>
         </div>
    </section>
       </> 
      )
    }
  }
  


