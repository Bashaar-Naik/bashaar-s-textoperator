
import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {

        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Text has been converted to upper-case', "success")
        
        // console.log("Uppercase was clicked")
        // setText("You have changed the text to something new")
    }

    const handleDownClick = () => {

        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Text has been converted to lower-case', "success")


        // console.log("Uppercase was clicked")
        // setText("You have changed the text to something new")
    }

    const handleClearClick = () => {

        let newText = "";
        setText(newText)
        props.showAlert('Text has been cleared', "success")
        // console.log("Uppercase was clicked")
        // setText("You have changed the text to something new")
    }

    const handleCopyText = () => {
        var text = document.getElementById("myBox")
        text.select(); //So here it will select the entire text and then copy it
        navigator.clipboard.writeText(text.value) //and this will take the value of the entire text and copy it to our clipboard
        props.showAlert('Text has been copied', "success")

    }

    // This function will handle all the extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces from the text have been cleared', "success")

    }

    // On change in on any case will be running so for that u will get the event object property for free
    const handleOnChange = (event) => {
        console.log("On change")
        //So now doing this, we will be able to type in the textbook which was earlier not possible
        setText(event.target.value) //
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                {/* //Now we can use a hook state in reactjs */}
                {/* Getting the textarea from Bootstrap and pasting it down below */}
                {/* settext is the updation function in this case */}

                {/* You have to change the state with the function  */}

                <h1 className='my-4'>{props.heading} </h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "light" ? "white" : "#042743", color: props.mode === "dark" ? "white" : "black" }} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-success  " onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success my-3 " onClick={handleDownClick}>Convert to lowercase</button>
                <button className="btn btn-success my-3 " onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-success my-3 " onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-success my-3 " onClick={handleExtraSpaces}>Clear Extra Space</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} - Minutes required to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>

        </>
    )
}
