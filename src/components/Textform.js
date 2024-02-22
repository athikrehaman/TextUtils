import React, { useState } from "react";


export default function Textform(props) {
    const handleUpClick = () => {
        //console.log("Upper case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper Case successfull","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lower Case successfull","success");
    }
    const handleClClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear Text successfull","success");
    }
    const handleCpClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard successfull","success");
    }
    // const handlePsClick = () => {
    //     navigator.clipboard.readText();
    // }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode ==="light" ? "#182b3f" : "white"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{backgroundColor: props.mode ==="light" ? "#182b3f" : "grey", color: props.mode ==="light" ? "white" : "#343a40"}}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                {/* <button className={`btn btn-${props.mode === "light" ? (props.mode==="dark" ? 'primary' : 'primary') : 'success'} mx-3 `} onClick={handleUpClick}>Convevrt to Uppercase</button> */}
                <button disabled={text.length===0} className="btn btn-primary my-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCpClick}>Copy Text</button>
                {/* <button className="btn btn-primary mx-3" onClick={handlePsClick}>Paste Text</button> */}
            </div>
            <div className="container my-2" style={{color: props.mode ==="light" ? "#182b3f" : "white"}}>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0? text: "Nothing to preview!!!"}</p>
            </div>
        </>
    );
}

Textform.defaultProps = {
    heading: 'enter here'

}
