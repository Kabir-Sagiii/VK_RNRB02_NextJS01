import React from 'react'
import "./Login.css"
import {useForm} from "react-hook-form"
function Login() {
          const {register,handleSubmit,reset}  = useForm()

          const myForm = (data)=>{
              console.log(data)
              reset()
          }

          
  return (
    <div className='login'>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit(myForm)}>
            <div>
            <label htmlFor="username">User Name</label>
            <input type="text" placeholder='enter username' { ...register("username")} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='password' {...register("password")}/>
        </div>
        <div>
            <input type="submit" />
        </div>
        </form>
    </div>
  )
}

export default Login