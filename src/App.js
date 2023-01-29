import React from "react";
import Header from "./components/Header"
import HonkInput from "./components/HonkInput";
import Honk from "./components/Honk";
import { honkData } from "./data"

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

// honksElements generate <Honk/> components by iterating over honkData (an array of all honks)
  const honksElements = honkData.map((honk)=>{
      return ( 
        <Honk
          id={honk.uuid}
          key={honk.uuid}
          handle={honk.handle}
          profilePic={honk.profilePic}
          likes={honk.likes}
          rehonks={honk.rehonks}
          honkText={honk.honkText}
          replies={honk.replies}
          isLiked={honk.isLiked}
          isRehonked={honk.isRehonked}
          uuid={honk.uuid}
          handleLike={()=>handleLike}
          handleRehonk={()=>handleRehonk}
        />
      )       
    })
  

  return (
    <>
    <Header />
    <main> 
     <HonkInput />
     {honksElements}
    </main>
    </>
  );
}

