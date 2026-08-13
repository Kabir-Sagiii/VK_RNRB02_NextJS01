import {useState} from 'react'
import "./RandomUser.css"
import { getRandomUsers } from '../../services/randomUsersService'

function RandomUser() {
    const [users,setUsers] = useState(null)

    const getUsers = ()=>{
      getRandomUsers(setUsers)
    }

  return (
    <div className='random-user'>
        <h1>Random User's Information</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum tempora consectetur quis beatae minima, nesciunt suscipit obcaecati rerum cum dolor culpa omnis doloremque fugiat maiores enim soluta facilis non, quod recusandae quia repellendus at ut? Animi, vel. Est facere doloremque cupiditate reprehenderit cum, officia saepe maiores placeat fugit ratione necessitatibus quaerat perferendis exercitationem consectetur in nihil praesentium dolorem ipsa voluptates fuga! Harum esse exercitationem, temporibus sint placeat unde. Quia!</p>
        <button onClick={getUsers}>Get User's</button>
        <br />
        {
          users && <ol>
            {
              users.map(({name:{first,last},picture:{medium}})=>{
                return <li>
                  <img src={medium} width={90} height={90} alt="" /> &nbsp;&nbsp;
                  {first} {last}</li>
              })
            }
          </ol>
        }
    </div>
  )
}

export default RandomUser