import axios from 'axios'

export const asyncGenerateQuote = () => {
    return (dispatch) => {
        axios.get('https://api.quotable.io/random')
            .then((response)=>{
                const result = response.data
                dispatch(addRandomQuote(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

const addRandomQuote = (data) => {
    return {
        type: 'RANDOM_QUOTE',
        payload: data
    }
}