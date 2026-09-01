// import React from 'react'
// import "./Login.css"
// import {useForm} from "react-hook-form"
// function Login() {
//           const {register,handleSubmit,reset,formState:{errors}}  = useForm()

//           const myForm = (data)=>{
//               console.log(data)
//               reset()
//           }

          
//   return (
//     <div className='login'>
//         <h1>Login Form</h1>
//         <form onSubmit={handleSubmit(myForm)}>
//             <div>
//             <label htmlFor="username">User Name</label>
//             <input type="text" placeholder='enter username' { ...register("username",{
//                                    required : {value :true,message :"username is required"},
//                                    minLength:{value:3,message:"enter minimum 3 char's"},
                        
//             })} /><br/>
//             {errors.username && <small className='error-message'>{errors.username.message}</small>}
//         </div>
//         <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" placeholder='password' {...register("password",{
//                 required:{value:true,message:"Password Required"},
//                 pattern:{
//                     value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{7,}$/,
//                     message:"Password must be 7+ characters with uppercase, lowercase, and a number."
//                 }
//             })}/> <br/>
//             {errors.password && <small className='error-message'>{errors.password.message}</small>}
//         </div>
//         <div>
//             <input type="submit" />
//         </div>
//         </form>
//     </div>
//   )
// }

// export default Login


import React from 'react'
import "./Login.css"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

 const schema = z.object({
       username : z.string().nonempty("username is required").min(5,"minimum 5 char's required"),
       password : z.string().nonempty("password is mandatory").min(3,"mini 3 char's required").regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{7,}$/,"Password must be 7+ characters with uppercase, lowercase, and a number.")
 })

   

function Login() {
          const {register,handleSubmit,reset,formState:{errors}}  = useForm({
            resolver : zodResolver(schema),
            mode:"onChange"
          })

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
            <input type="text" placeholder='enter username' { ...register("username")} /><br/>
           {errors.username && errors.username.message}
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='password' {...register("password",)}/> <br/>
            {errors.password && errors.password.message}
        </div>
        <div>
            <input type="submit" />
        </div>
        </form>
    </div>
  )
}

export default Login