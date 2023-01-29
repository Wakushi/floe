import React from "react";

export default function Modal(){

    
  function handleModal() {
    document.getElementById('reply-modal').classList.toggle('hidden')
  }

    return(
        <div id="reply-modal" className="reply-modal">
            <div className="modal-inner">
                <i
                    onClick={handleModal} 
                    className="fa-solid fa-xmark"
                ></i>
                <textarea
                    id="honkReply"
                    className="user-reply"
                    placeholder="Your answer.."
                ></textarea>
                <h5>Reply...</h5>
            </div>
               

        </div>
    )
}