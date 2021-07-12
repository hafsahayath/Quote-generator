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
        <div>
            {
                !edit ? (
                    <div>
                        <p>{editBody}</p>
                        <h4>{editTitle}</h4>
                        <button onClick={handleEditQuote}>edit</button>
                        <button onClick={deleteQuote}>delete</button>                        
                    </div>
                ) : (
                    <form onSubmit={handleUpdateSubmit}>
                        <textarea value={editBody} cols="30" rows="10" onChange={handleBodyChange}></textarea> <br />
                        <input type="text" value={editTitle} onChange={handleTitleChange}/> <br />
                        <button onClick={()=>setEdit(false)}>cancel</button>
                        <input type="submit" value="save changes" />
                    </form>
                )
            }
        </div>
    )
}

export default QuoteItem
