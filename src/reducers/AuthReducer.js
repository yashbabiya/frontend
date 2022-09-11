const initialState = {
    isLoggedIn : true
}

const AuthReducer = (state=initialState,action) =>{
    switch(action.type){


        case "LOGIN":
            state.isLoggedIn = true
            return state

        case "LOGOUT":
            state.isLoggedIn = false
            return state

        default:
            return state
    }
}

export default AuthReducer