import React from "react";

export default function Honk(props){

    const likeStyle = {
        color : props.honk.isLiked ? "red" : ""
    }
    const rehonkStyle = {
        color : props.honk.isRehonked ? "green" : ""
    }

    const replyElements = props.honk.replies.map((reply)=>{
        return (
            <div className="reply">
                <img className="user-pic" src={reply.profilePic}></img>
                <span className="reply-info">
                    <h4>{reply.handle}</h4>
                    <p>{reply.honkText}</p>
                </span>
            </div>
        )
    })


    return(
        <>
        <div className="honk">
            <img src={props.honk.profilePic} className="other-users user-pic"></img>
            <div className="honk-display">
                <h3 className="user-name">{props.honk.handle}</h3>
                <p>{props.honk.honkText}</p>
                <div className="icons">
                    <span className="honk-replies">
                        <i 
                        onClick={props.handleReplies()}
                        data-replies={props.id} 
                        className="fa-regular fa-comment-dots"
                        ></i>
                        {props.honk.replies.length}
                    </span>
                    <span className="honk-likes">
                        <i
                         onClick={props.handleLike()} 
                         style={likeStyle} 
                         data-heart={props.id} 
                         className="fa-solid fa-heart"
                         ></i>
                        {props.honk.likes}
                    </span>
                    <span className="honk-rehonks">
                        <i 
                        onClick={props.handleRehonk()} 
                        style={rehonkStyle} 
                        data-rehonk={props.id} 
                        className="fa-solid fa-retweet"></i>
                        {props.honk.rehonks}
                    </span>
                </div>
            </div>
        </div>
        <div className="hidden" id={props.uuid}>
            <span className="reply-input">
                <textarea
                    id={'text' + props.id}
                    className="reply-area"
                    placeholder="Answer something..."
                ></textarea>
                <button 
                    data-reply={props.id} 
                    onClick={props.handleReply()} 
                    className="reply-btn"
                >Reply</button>
            </span>   
            {replyElements}
        </div>
        
        </>
    )
}