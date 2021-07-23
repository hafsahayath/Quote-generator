import React from 'react'
import { useSelector } from 'react-redux'
import AppContainer from './AppContainer'


const App = (props) => {
    const login = useSelector(state=>state.auth.login)

    return (
        <div className={ !login ? "bg-pinkBg w-full h-screen":"bg-pinkBg w-full h-full"}>
            <AppContainer />
        </div>

    )
}

export default App