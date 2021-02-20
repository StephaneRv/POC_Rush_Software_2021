import React from 'react';
import "./index.css"

type ImageProps = {
    imgProfileUrl: string;
    messageId: number;
    senderName: string;
    messageText: string;
}

function Message(props: ImageProps): JSX.Element {
    return(
        <div className="message">
            <img className="avatar" src={props.imgProfileUrl}></img>
            <p className="pseudo">{props.senderName}</p>
            <p className="messageText">{props.messageText}</p>
        </div>
    );
}

export default Message