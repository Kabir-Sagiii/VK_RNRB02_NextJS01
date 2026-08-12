export function countReducer(state,action){
         // logics to update state
         if(action.type==="inc"){

 return state + action.payload
         }else if(action.type==="dec") {

return state - action.payload
         }else if(action.type==="reset") {
            return 0
         }
         
        
      }