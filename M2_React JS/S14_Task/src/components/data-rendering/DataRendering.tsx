import {useState} from 'react'

function DataRendering() {
    const [state,setState] = useState([1,2,3]);
    const [data,setData] = useState([
    <p>this is para</p>,
    <h3>this is h3</h3>])
  return (
    <div>
        <h1>Data Rendering : {state}</h1>
        {
            data
        }
    </div>
  )
}

export default DataRendering