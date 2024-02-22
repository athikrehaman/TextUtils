import React from "react";
// import React, {useState} from "react";

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    // const  [btnstyle, setbtnstyle] = useState("Enable Dark mode");

    let myStyle = {
        color: props.mode === "dark" ? "white" : "#0a2856",
        backgroundColor: props.mode === "dark" ? "#0a2856" : "white"
    };

    // const toggleClick = () => {
    //     if (myStyle.color === 'black'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         });
    //         setbtnstyle("Enable Light mode");
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setbtnstyle("Enable Dark mode");
    //     }
    // }
    return (
        <div className="container" style={{ color: props.mode === "dark" ? "white" : "#0a2856" }}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <strong>Convert Text Case</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            This functionality allows users to convert the case of the text displayed in the text area.
                            Users can choose between converting the text to uppercase or lowercase.
                            Clicking on the "Convert to Uppercase" button will transform all text to uppercase.
                            Clicking on the "Convert to Lowercase" button will transform all text to lowercase.
                            This feature is useful for users who need to standardize the capitalization of their text or adjust it to meet specific formatting requirements.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <strong>Copy Text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            This functionality enables users to copy the text displayed in the text area to their clipboard.
                            Users can easily copy the entire text or a selected portion of it.
                            Clicking on the "Copy Text" button will automatically copy the text to the clipboard.
                            This feature is convenient for users who need to quickly share or paste the text into other applications, such as documents, emails, or social media platforms.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <strong>Clear Text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            This functionality allows users to clear the text displayed in the text area.
                            Clicking on the "Clear Text" button will remove all content from the text area, effectively resetting it to an empty state.
                            This feature is helpful for users who want to start fresh or clear out existing text before entering new content.
                            It provides a quick and easy way to declutter the text area and maintain a clean workspace.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="conatiner my-3">
            <button type="button" className="btn btn-primary" onClick={toggleClick}>{btnstyle}</button>
            </div> */}
        </div>
    );
}
