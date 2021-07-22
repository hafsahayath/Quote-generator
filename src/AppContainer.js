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
        <div className="flex-col justify-center">
                <ul className="flex justify-between py-5 px-8">
                    <li className="text-xl font-semibold subpixel-antialiased text-pinkMain"><Link to="/"><i className="fab fa-quora text-2xl"></i>uoteBook</Link></li>
                    { !login ? 
                    <>
                        <li className="text-xl font-semibold subpixel-antialiased" onClick={()=>setShow(true)}><Link className="text-pinkMain">Login</Link></li>
                    </> :
                    <div className="flex">
                        <li className="text-xl font-semibold subpixel-antialiased mr-3"><Link className="text-pinkMain" to="/quotes">Quotes</Link></li>
                        <li className="text-xl font-semibold subpixel-antialiased"><Link className="text-pinkMain" to="/" onClick={()=>{
                            localStorage.removeItem('token')
                            dispatch(logoutUser())
                        }}>Logout</Link></li>
                    </div>
                    }
                </ul>
            <div>
                <Route path="/" exact render={(props)=>{
                    return <RandomQuote {...props} show={show} saveQuote={saveQuote} onClose={onClose} setShow={setShow}/>
                }} />
                <Route path="/register" render={(props)=>{
                    return <Register {...props} setShow={setShow} />
                }}/>
                <Route path="/quotes" component={QuoteList} />
            </div>
        </div>

    )
}

export default withRouter(AppContainer)