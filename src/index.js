import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import configStore from './store/configStore'

const store = configStore()

store.subscribe(()=>{
    console.log('store updated',store.getState())
})

console.log(store.getState())

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'))