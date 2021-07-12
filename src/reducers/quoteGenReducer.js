const quoteInitialState = {}

const quoteGenReducer = (state=quoteInitialState, action) => {
    switch(action.type){
        case 'RANDOM_QUOTE':{
            return {...action.payload}
        }

        default:{
            return {...state}
        }
    }
}

export default quoteGenReducer