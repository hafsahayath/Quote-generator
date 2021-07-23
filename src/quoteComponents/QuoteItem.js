import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncUpdateQuote, asyncDeleteQuote } from '../actions/quotesListActions'

const QuoteItem = ({_id:id, title, body}) => {
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(title?title:'')
    const [editBody, setEditBody] = useState(body?body:'')

    const dispatch = useDispatch()

    const handleEditQuote = () => {
        setEdit(true)
    }

    const handleBodyChange = (e) => {
        const res = e.target.value
        setEditBody(res)
    }

    const handleTitleChange = (e) => {
        const res = e.target.value
        setEditTitle(res)
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: editTitle,
            body: editBody
        }
        dispatch(asyncUpdateQuote(formData, id))
        setEdit(false)
    }

    const deleteQuote = () => {
        dispatch(asyncDeleteQuote(id))
    }

    return (
        <div className="m-3 p-4 bg-red-200 shadow-lg rounded-lg">
            {
                !edit ? (
                    <div className="flex-col">
                        <p className="p-2">{editBody}</p>
                        <h4 className="p-2">{editTitle}</h4>
                        <div className="flex justify-between w-7/12 ml-56">
                            <button className="btn bg-white text-pinkMain shadow-lg border-2 border-pinkMain hover:bg-pinkMain hover:text-white" onClick={handleEditQuote}>edit</button>
                            <button className="btn bg-white text-pinkMain shadow-lg border-2 border-pinkMain hover:bg-pinkMain hover:text-white" onClick={deleteQuote}>delete</button>                        
                        </div>
                    </div>
                ) : (
                    <form className="flex-col pt-2" onSubmit={handleUpdateSubmit}>
                        <textarea className="w-7/12 h-28 p-4 shadow-inner bg-red-100 overflow:auto rounded-sm" type="text" value={editBody} onChange={handleBodyChange}></textarea> <br />
                        <input className="mt-1 shadow-inner bg-red-100 rounded-sm p-2" type="text" value={editTitle} onChange={handleTitleChange}/> <br />
                        <div className="flex justify-between w-7/12 ml-56 mt-3">
                            <button className="btn bg-white text-pinkMain shadow-lg border-2 border-pinkMain hover:bg-pinkMain hover:text-white" onClick={()=>setEdit(false)}>cancel</button>
                            <button className="btn bg-white text-pinkMain shadow-lg border-2 border-pinkMain hover:bg-pinkMain hover:text-white" type="submit">save changes</button>
                        </div>
                    </form>
                )
            }
        </div>
    )
}

export default QuoteItem
