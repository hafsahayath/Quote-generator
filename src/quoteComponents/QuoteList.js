import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QuoteItem from './QuoteItem'
import { asyncGetQuotes } from '../actions/quotesListActions'
import { Link } from 'react-router-dom'

const QuoteList = (props) => {
    const quotes = useSelector(state=>state.quotes)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(asyncGetQuotes())
    },[])

    return (
        <div className="flex justify-center content-center h-full">
            {
                quotes.length > 0 ? (
                    <div className="pt-4 w-9/12 text-center">
                        {quotes.map(ele=>{
                            return <QuoteItem key={ele._id} {...ele}/>
                        })}
                    </div>
                ) : (
                    <div>
                        <Link to="/">Add quotes</Link>
                    </div>
                )
            }
        </div>
    )
}

export default QuoteList

