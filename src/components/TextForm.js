// import { useState } from "react"
import React, { useState } from 'react'

export default function TextForm() {
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
        <div id='josa' >
            <h1>Enter Text to Analyze</h1>
            {/* <label for="exampleColorInput" class="form-label">Color picker</label>
            <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input> */}
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label"></label> */}
                <textarea className="form-control" id="myBox" placeholder='enter text' value={text} onChange={handlechange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={changetext}>Uppercase</button>
            <button className="btn btn-success mx-2" onClick={changetextlo}>Lowercase</button>
            <button className="btn btn-danger" onClick={cleartext}>Clear</button>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{text.split(" ").length * 0.008} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
    )
}
