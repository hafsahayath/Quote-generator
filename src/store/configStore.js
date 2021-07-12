import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import quoteGenReducer from "../reducers/quoteGenReducer";
import quotesListReducer from "../reducers/quotesListReducer";
import authReducer from "../reducers/authReducer";

const configStore = () => {
    const store = createStore(combineReducers({
        auth: authReducer,
        randomQuote : quoteGenReducer,
        quotes: quotesListReducer
    }),applyMiddleware(thunk))
    return store
}

export default configStore