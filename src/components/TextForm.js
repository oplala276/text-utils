// import { useState } from "react"
import React, { useState } from 'react'

export default function TextForm() {
    const changetext = () => {
        let newText = text.toUpperCase();
        // console.log("cahnged" + text)
        setText(newText)

    }
    const handlechange = (e) => {
        setText(e.target.value);
    }
    const [text, setText] = useState("");
    return (
        <div>
            <h1>Enter Text to Analyze</h1>
            {/* <label for="exampleColorInput" class="form-label">Color picker</label>
            <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input> */}
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label"></label> */}
                <textarea className="form-control" id="myBox" placeholder='enter text' value={text} onChange={handlechange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={changetext}>Convert to Uppercase</button>
        </div>
    )
}
