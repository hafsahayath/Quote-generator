import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncGenerateQuote } from '../actions/quoteGenAction'
import LoginModal from '../authComponents/LoginModal'

const RandomQuote = ({setShow, show, onClose, saveQuote}) => {
    const randomQuote = useSelector(state=>state.randomQuote)
    const dispatch = useDispatch()

    const generate = () => {
        dispatch(asyncGenerateQuote())
    }

    return (
        <div>
            <p>{randomQuote.content}</p>
            <h4>{randomQuote.author}</h4>
            <button onClick={generate}>New Quote</button>
            {Object.keys(randomQuote).length > 0 && <button onClick={saveQuote}>save</button>}
            <LoginModal show={show} onClose={onClose} setShow={setShow}/>
        </div>
    )
}

export default RandomQuote
