import { GET_USER_SUCCESS } from "./actions"


const myFirstReducer = (state={user:[]},action:any) => {
    console.log(action,"action")
    console.log(state,"state")
    switch(action.type) {
        case GET_USER_SUCCESS:
            return {...state, user:action.users}
        default : 
            return state
    }
}

export default myFirstReducer