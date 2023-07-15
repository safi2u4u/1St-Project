import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <>
    <h1>404 error</h1>
    <Link to="/"><button>Go to home page</button></Link>
    </>
  )
}

export default Notfound