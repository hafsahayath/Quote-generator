const authInitialState = {register: false, login: false}

const authReducer = (state=authInitialState, action) => {
    switch(action.type){

        case 'REGISTER':{
            return {...state, register:true}
        }

        case 'LOGIN':{
            localStorage.setItem('token',action.payload)
            return {...state, login:true}
        }

        case 'LOGOUT':{
            alert('logged out successfully')
            localStorage.removeItem('token')
            return authInitialState
        }

        default:{
            return {...state}
        }
    }
}

export default authReducer