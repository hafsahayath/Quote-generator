import React,{ useState, useEffect } from 'react'
import RandomQuote from './quoteComponents/RandomQuote'
import { Link, Route, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Register from './authComponents/Register'
import { asyncSaveQuote } from './actions/quotesListActions'
import QuoteList from './quoteComponents/QuoteList'
import { logoutUser, setLoggedIn } from './actions/authActions'


const AppContainer = (props) => {
    const [show, setShow] = useState(false)
    const login = useSelector(state=>state.auth.login)
    const randomQuote = useSelector(state=>state.randomQuote)
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.hasOwnProperty('token')){
            dispatch(setLoggedIn())
        }
    },[])

    const saveQuote = () => {
        if(!login){
            setShow(true)
        } else {
            const quoteToSave = {
                title: randomQuote.author,
                body: randomQuote.content
            }
            dispatch(asyncSaveQuote(quoteToSave))
        }
    }

    const onClose = () => {
        setShow(false)
    }

    return (
        <div>
            <ul>
                <li><Link to="/">QuoteBook</Link></li>
                { !login ? 
                <>
                    <li onClick={()=>setShow(true)}><Link>Login</Link></li>
                </> :
                <>
                    <li><Link to="/quotes">Quotes</Link></li>
                    <li><Link to="/" onClick={()=>{
                        localStorage.removeItem('token')
                        dispatch(logoutUser())
                    }}>Logout</Link></li>
                </>
                }
            </ul>

            <Route path="/" exact render={(props)=>{
                return <RandomQuote {...props} show={show} saveQuote={saveQuote} onClose={onClose} setShow={setShow}/>
            }} />
            <Route path="/register" render={(props)=>{
                return <Register {...props} setShow={setShow} />
            }}/>
            <Route path="/quotes" component={QuoteList} />
        </div>

    )
}

export default AppContainer