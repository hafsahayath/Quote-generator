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
        <div className="flex-col pt-28">
            <h1 className="text-center cursive text-9xl">Quote generator</h1>
            <p className="text-center py-2 font-semibold text-3xl subpixel-antialiased cursive">Generate unlimited amounts of unique inspirational quotes</p>
            <div className={Object.keys(randomQuote).length>0? "flex flex-col p-3 bg-white shadow-2xl w-6/12 ml-96 rounded-lg":"flex flex-col p-3 w-6/12 ml-96 rounded-lg"}>
                {
                    Object.keys(randomQuote).length > 0 &&
                        <div className="self-center p-2 pt-9 text-left w-4/5 h-40 m-auto overflow-auto">
                            <p>" {randomQuote.content} "</p>
                            <h4 className="text-left font-bold pt-5 pl-2">{randomQuote.author}</h4>
                        </div>
                }

                <div className="flex mt-1 justify-between w-3/5 m-auto">
                    <button className={Object.keys(randomQuote).length > 0 ? "btn bg-indigo-300" : "btn ml-36 bg-indigo-300"} onClick={generate}>New Quote</button>
                    {Object.keys(randomQuote).length > 0 && <button className="btn bg-indigo-300" onClick={saveQuote}>save</button>}
                </div>
                <LoginModal show={show} onClose={onClose} setShow={setShow}/>

            </div>
        </div>
    )
}

export default RandomQuote
