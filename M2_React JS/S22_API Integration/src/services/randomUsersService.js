import axios from "axios"
const url = "https://randomuser.me/api/?results=5"
export function getRandomUsers(setUsers){
    //business logic
    //send a request to backend App

   return axios.get(url).then((res)=>{
        console.log(res.data.results)
        setUsers(res.data.results)
      }).catch(()=>{
        alert("Failed to Fetch Data")
      })
}