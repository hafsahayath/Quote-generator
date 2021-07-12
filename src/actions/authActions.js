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
                    dispatch(loginUser(result.token))
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
}

const loginUser = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

const registerUser = () => {
    return {
        type: 'REGISTER'
    }
}