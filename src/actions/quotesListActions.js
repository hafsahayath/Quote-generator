import axios from "axios";

export const asyncSaveQuote = (formData) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/api/notes',formData,{
            headers:{
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            } else {
                alert('quote saved')
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const asyncGetQuotes = () => {
    return (dispatch) => {
        axios.get('https://dct-user-auth.herokuapp.com/api/notes',{
            headers:{
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(getSavedQuotes(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const asyncUpdateQuote = (formData, id) => {
    return (dispatch) => {
        axios.put(`https://dct-user-auth.herokuapp.com/api/notes/${id}`,formData,{
            headers:{
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(updateQuote(result))
        })
        .catch((err)=>{
            alert(err.message)
        })

    }
}

export const asyncDeleteQuote = (id) => {
    return (dispatch) => {
        axios.delete(`https://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(deleteQuote(result._id))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const deleteQuote = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}

const updateQuote = (data) => {
    return {
        type: 'UPDATE_QUOTE',
        payload: data
    }
}

const getSavedQuotes = (data) => {
    return {
        type: 'GET_QUOTES',
        payload: data
    }
}

// const saveNewQuote = (data) => {
//     return {
//         type: 'SAVE_QUOTE',
//         payload: data
//     }
// }