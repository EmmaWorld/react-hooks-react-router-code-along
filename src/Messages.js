import React from "react";

const messaStyles = {
    width: "300px",
    padding: "12px",
    textDecoration: "none",
    color: "white",
  };
function Messages(){
    return(
        <div>
            <textarea style={messaStyles} name="message" >Write your message</textarea>
        </div>
    )
}


export default Messages;