import {useState} from 'react'

function User() {
    const [user,setUser] = useState([{name:"s1",city:"mumbai"},{name:"s2",city:"pune"},{name:"s3",city:"hyd"}])
  return (
    <div>
        {
            user.map((element)=>{
                return (
                    <ul>
                        <li>{element.name}</li>
                        <li>{element.city}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default User