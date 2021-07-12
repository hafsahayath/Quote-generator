const authInitialState = {register: false, login: false}

const authReducer = (state=authInitialState, action) => {
    switch(action.type){

        case 'REGISTER':{
            return {...state, register:true}
        }

        case 'LOGIN':{
            return {...state, login:true}
        }

        case 'LOGGED_IN':{
            return {...state, login:true}
        }

        case 'LOGOUT':{
            alert('logged out successfully')
            return authInitialState
        }

        default:{
            return {...state}
        }
    }
}

export default authReducer