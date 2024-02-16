import React, { useEffect } from  "react";

function Message({ messageText, removeMessage }) {

    useEffect(() => {
       const messageTimout = setTimeout(() => {
            removeMessage();
        
        }, 1500)

        window.setTimeout(messageTimout);
        return () => window.clearTimeout(messageTimout);

        
    },);

    return (
        <div className="message">
            <p>{messageText}</p>
            <span className="close-message" onClick={removeMessage}>x</span>
        </div>
    )
}

export default Message;