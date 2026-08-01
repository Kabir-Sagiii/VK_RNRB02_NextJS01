import {useState} from 'react'

function Map() {
    const [state,setState] = useState(["rakesh","pooja","amit","shivam","sonam","abc","xyz"])
  return (
    <div>
        <h1>Users Data</h1>
        <ol>
            {
                 state.map((name)=>{
                    return (
                        <li>{name}</li>
                    )
                 })
            }

          
        </ol>
    </div>
  )
}

export default Map