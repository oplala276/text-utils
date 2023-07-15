// import { useState } from "react"
import React, { useState } from 'react'

export default function TextForm(props) {
    const [mystyle, setMystyle] = useState({
        color: 'black',
        background: 'white'
    }
    )
    const [btntext, setBtntext] = useState({
        background: 'orange',
        color: 'black',
    })
    const togol = () => {
        if (mystyle.background === 'white') {
            setMystyle({
                color: 'white',
                background: 'black'
            })
            setBtntext({
                background: 'blue',
                color: 'black',
            })
        } else {
            setMystyle({
                color: 'black',
                background: 'white'
            })
            setBtntext({
                background: 'blue',
                color: 'black',
            })
        }
    }
    const changetext = () => {
        let newText = text.toUpperCase();
        // console.log("cahnged" + text)
        setText(newText)
    }
    const changetextlo = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const cleartext = () => {
        let newText = "";
        setText(newText)
    }
    const handlechange = (e) => {
        setText(e.target.value);
    }
    const [text, setText] = useState("");
    return (
        <div id='josa' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1>Enter Text to Analyze</h1>
            {/* <label for="exampleColorInput" class="form-label">Color picker</label>
            <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input> */}
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label"></label> */}
                <textarea className="form-control" id="myBox" placeholder='enter text' value={text} onChange={handlechange} style={{ background: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} rows="8" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={changetext}>Uppercase</button>
            <button className="btn btn-success mx-2" onClick={changetextlo}>Lowercase</button>
            <button className="btn btn-danger" onClick={cleartext}>Clear</button>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{text.split(" ").length * 0.008} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter your text to preview"}</p>

        </div>
    )
}
