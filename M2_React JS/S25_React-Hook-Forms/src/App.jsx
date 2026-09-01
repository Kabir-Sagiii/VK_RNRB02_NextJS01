import {useState} from 'react'
import "./App.css"
import Login from './pages/login/Login'
function App() {
  const [username,setUserName] = useState("Sagar")

  const handleMyForm = (event)=>{
    event.preventDefault()
  console.log(username)
  setUserName("")
  }

  return (
    // <div className='app'>
    //   <h1>React Hook Forms</h1>
    //   <form onSubmit={handleMyForm}>
    //         <div>
    //           <input type="text" value={username} onChange={(event)=>{
    //               setUserName(event.target.value)
    //           }} placeholder='username' />
    //           <button type="submit">Submit</button>
    //         </div>
    //   </form>
    // </div>
    <div>
      <Login />
    </div>
  )
}

export default App