import React from "react";
import Header from "./components/Header"
import HonkInput from "./components/HonkInput";
import Honk from "./components/Honk";
import { honkData } from "./data"
import userPic from "./assets/user.png"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export default function App() {

  // Render triggerer
  const [cliked, setClicked] = React.useState(0)
  
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
    document.getElementById(honkId.target.dataset.reply).classList.toggle('hidden')
  }


  // handleNewHonk checks the presence of text in the textarea and adds a new honk based on the text to honkData
  function handleNewHonk(){

    // Prevents execution if the textarea is empty.
    if(document.getElementById('honkText').value){

      honkData.unshift(
        {
          handle: `@Makushi`,
          profilePic: userPic,
          likes: 0,
          rehonks: 0,
          honkText: document.getElementById('honkText').value,
          replies: [],
          isLiked: false,
          isRehonked: false,
          uuid: uuidv4()  // uuidv4 generates a new random uuid
        }
      )

      document.getElementById('honkText').value = ''

      // setClicked causes a re-render.
      setClicked(prevClicked => prevClicked + 1)
    }
    
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

