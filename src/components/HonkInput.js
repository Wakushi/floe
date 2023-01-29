import React from "react";
import userLogo from "../assets/user.png"

export default function TextInput(props){
    return (
        <>
            <div className="create-honk">
                <img src={userLogo} className="main-user user-pic"></img>
                <textarea
                    id="honkText"
                    className="user-input"
                    placeholder="What's new on the floe ?"
                ></textarea>
            </div>
            
            <button onClick={props.handleNewHonk} className="honk-btn">Honk</button>
        </>
    )
}