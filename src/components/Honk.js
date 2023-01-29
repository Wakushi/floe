import React from "react";
import profilePic from "../assets/user.png"

export default function Honk(props){

    const likeStyle = {
        color : props.isLiked ? "red" : ""
    }
    const rehonkStyle = {
        color : props.isRehonked ? "green" : ""
    }

    return(
        <div className="honk">
            <img src={profilePic} className="other-users user-pic"></img>
            <div className="honk-display">
                <h3 className="user-name">{props.handle}</h3>
                <p>{props.honkText}</p>
                <div className="icons">
                    <span className="honk-replies">
                        <i data-comment={props.id} className="fa-regular fa-comment-dots"></i>
                        {props.replies.length}
                    </span>
                    <span className="honk-likes">
                        <i onClick={props.handleLike()} style={likeStyle} data-heart={props.id} className="fa-solid fa-heart"></i>
                        {props.likes}
                    </span>
                    <span className="honk-rehonks">
                        <i onClick={props.handleRehonk()} style={rehonkStyle} data-rehonk={props.id} className="fa-solid fa-retweet"></i>
                        {props.rehonks}
                    </span>
                </div>
            </div>
        </div>
    )
}