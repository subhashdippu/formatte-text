import React, { useState } from 'react'

const Form = (props) => {
    const [text, setText] = useState("Enter the text")
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpperCase = () => {
        let upper = text.toUpperCase()
        setText(upper)
    }
    const handleLowerCase = () => {
        let lower = text.toLowerCase()
        setText(lower)
    }
    const handleDelete = () => {
        setText("")
    }
    return (
        <>
            <div className='container' >
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary mx-4' onClick={handleUpperCase}>Upper Case</button>
                <button className='btn btn-secondary mx-4' onClick={handleLowerCase}>Lower Case</button>
                <button className='btn btn-warning mx-4' onClick={handleDelete}>Delete</button>

                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
            </div>
        </>
    )
}

export default Form