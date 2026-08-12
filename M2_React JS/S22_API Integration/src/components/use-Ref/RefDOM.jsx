import {useRef} from 'react'

function RefDOM() {
     let h1Ref=  useRef(null) // h1Ref = {current:null}
                             // h1Ref= {current : h1DomElement}
    let btnRef = useRef(null)
  
    function updateh1(){
     // implement dom manipulation;
     h1Ref.current.style.color = "red"
     h1Ref.current.innerText = document.getElementById("textB").value

     btnRef.current.innerText = "DOM"

     
  }
  
    return (
    <div className='use-ref'>
        <h1 ref={h1Ref}>useRef() Hook to Access Dom element</h1>
        <input id="textB" /><br/><br/>
        <button ref={btnRef} onClick={updateh1}>Update DOM</button>
    </div>
  )
}

export default RefDOM