import Cookies from "js-cookie"

const initialState = {
    isLoggedIn : !!Cookies.get("rentit"),
    ...JSON.parse(localStorage.getItem("userData") || "{}")
}

const AuthReducer = (state=initialState,action) =>{
    switch(action.type){


        case "LOGIN":
            state = {
                isLoggedIn:true,
                ...action.payload
            }
            localStorage.setItem("userData",JSON.stringify(state))
            return state

        case "LOGOUT":
            localStorage.removeItem("userData")
            state = initialState
            return state

        default:
            return state
    }
}

export default AuthReducer