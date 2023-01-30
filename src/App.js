import React from "react";
import Header from "./components/Header"
import HonkInput from "./components/HonkInput";
import Honk from "./components/Honk";
import { honkData } from "./data"
import { nanoid } from "nanoid";

import userPic from "./assets/user.png"
import orca from "./assets/orca.png"

export default function App() {

  // Render triggerer
  const [cliked, setClicked] = React.useState(0)
  const userName = '@Makushi'
  
  // handleLike checks which like icon was clicked and update the corresponding honk.
  function handleLike(honkId){

      honkData.forEach((honk) => {
        if(honk.uuid === honkId.target.dataset.heart){
          honk.isLiked ? honk.likes -- : honk.likes ++
          honk.isLiked = !honk.isLiked      
        } 
      })
      // setClicked causes a re-render.
      setClicked(prevClicked => prevClicked + 1)
  }

  // handleRehonk checks which rehonk icon was clicked and update the corresponding honk.
  function handleRehonk(honkId){

      honkData.forEach((honk) => {
        if(honk.uuid === honkId.target.dataset.rehonk){
          honk.isRehonked ? honk.rehonks -- : honk.rehonks ++
          honk.isRehonked = !honk.isRehonked      
        } 
      })
      // setClicked causes a re-render.
      setClicked(prevClicked => prevClicked + 1)
  }

  // handleReplies toggles the 'hidden' class to display/hide the replies of a honk
  function handleReplies(honkId){
    document.getElementById(honkId.target.dataset.replies).classList.toggle('hidden')
  }


  // handleNewHonk checks the presence of text in the textarea and adds a new honk based on the text to honkData
  function handleNewHonk(){

    // Prevents execution if the textarea is empty.
    if(document.getElementById('honkText').value){

      honkData.unshift(
        {
          handle: userName,
          profilePic: userPic,
          likes: 0,
          rehonks: 0,
          honkText: document.getElementById('honkText').value,
          replies: [],
          isLiked: false,
          isRehonked: false,
          uuid: nanoid(),   // nanoid generates a new random id
        }
      )

      document.getElementById('honkText').value = ''
      
      // setClicked causes a re-render.
      setClicked(prevClicked => prevClicked + 1)

    }
    
  }

// handleReply seeks the textarea whose id matches the button's dataset and adds a reply to the replies array of any given Honk.
  function handleReply(honkId){

    const replyText = document.getElementById("text" + honkId.target.dataset.reply).value

    // Prevents execution if the textarea is empty.
    if(replyText){
      honkData.forEach((honk)=>{
        if(honk.uuid === honkId.target.dataset.reply){
          honk.replies.push(
            {
              handle: userName,
              profilePic: userPic,
              honkText:replyText
            }
          )
        }
      })
  
      document.getElementById("text" + honkId.target.dataset.reply).value = ''
      // setClicked causes a re-render.
      setClicked(prevClicked => prevClicked + 1)
    }
    
  }


 // handleDelete removes the clicked honk from the data 
  function handleDelete(honkId){
    const deletedHonkId = honkId.target.dataset.delete
    honkData.filter(function(val, index, arr){
      if(val.uuid === deletedHonkId){
        arr.splice(index,1)
        return true
      }
      return false
    })
    
    // setClicked causes a re-render.
    setClicked(prevClicked => prevClicked + 1)
  }

  // Script test function 

  React.useEffect(()=>{
    setTimeout(()=>{
      scriptHonk()
  },15000)
  },[])
  

  function scriptHonk(){
    honkData.unshift(
      {
        handle: `@Orcastic3 ✅`,
        profilePic: orca,
        likes: 0,
        rehonks: 0,
        honkText: `I need 5 more penguin followers to reach 10k ! 😍 `,
        replies: [],
        isLiked: false,
        isRehonked: false,
        uuid: '4b161eee-c0f5-4545-9c4b-8566862',   // nanoid generates a new random id
      }
    )
  }
  



// honksElements generate <Honk/> components by iterating over honkData (an array of all honks)
  const honksElements = honkData.map((honk)=>{
      return ( 
        <Honk
          id={honk.uuid}
          key={honk.uuid}
          honk={honk}
          uuid={honk.uuid}
          handleLike={()=>handleLike}
          handleRehonk={()=>handleRehonk}
          handleReplies={()=>handleReplies}
          handleReply={()=>handleReply}
          handleDelete={()=>handleDelete}
        />
      )       
    })
  

  return (
    <>
    <Header/>
    <main> 
     <HonkInput
        handleNewHonk={handleNewHonk} 
     />
     {honksElements}
    </main>
    </>
  );
}

