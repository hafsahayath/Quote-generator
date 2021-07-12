import axios from "axios"

export const asyncRegisterUser = (formData) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/users/register', formData)
            .then((response)=>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                } else {
                    dispatch(registerUser())
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const asyncLoginUser = (formData) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/users/login', formData)
            .then((response)=>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                } else {
                    localStorage.setItem('token',result.token)
                    dispatch(loginUser())
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const setLoggedIn = () => {
    return {
        type: 'LOGGED_IN'
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
}

const loginUser = () => {
    return {
        type: 'LOGIN'
    }
}

const registerUser = () => {
    return {
        type: 'REGISTER'
    }
}