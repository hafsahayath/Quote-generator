const quotesInitialState = []

const quotesListReducer = (state=quotesInitialState, action) => {
    switch(action.type){

        case 'GET_QUOTES':{
            return [...action.payload]
        }

        case 'UPDATE_QUOTE':{
            const res = state.map(ele=>{
                if(ele._id === action.payload._id){
                    return {...ele, ...action.payload}
                } else {
                    return ele
                }
            })
            return res
        }

        case 'DELETE':{
            const res = state.filter(ele=>{
                return ele._id !== action.payload
            })
            return res
        }

        default:{
            return [...state]
        }
    }
}

export default quotesListReducer