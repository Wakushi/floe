import React from "react";
import userLogo from "../assets/user.png"

export default function TextInput(){
    return (
        <>
            <div className="create-honk">
                <img src={userLogo} className="main-user user-pic"></img>
                <textarea
                    className="user-input"
                    placeholder="What's new on the floe ?"
                ></textarea>
            </div>
            
            <button className="honk-btn">Honk</button>
        </>
    )
}