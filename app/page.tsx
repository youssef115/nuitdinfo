"use client"
import Blog from "@/components/Blog";

import Features from "@/components/Features";
import Hero from "@/components/Hero";

import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const emojiList = ['😀', '😂', '😍', '🤔', '🤩', '🤯', '🥳', '🤗', '🤫', '🤭'];
export default function Home() {
  const [hideTree,setHideTree] =useState(true);
  const [randomWidth,setRandomWidth]=useState<number>();
  const [randomHeight,setRandomHeight]=useState<number>();
  const [emojis, setEmojis] = useState([]);
  useEffect(()=>{
    setInterval(()=>{
      generateRandomPosition()
    },5000);
  },[])

  const generateRandomPosition=()=>{
    setRandomWidth(Math.floor(Math.random() * window.innerWidth));
    setRandomHeight(Math.floor(Math.random() * window.innerHeight));
    console.log(randomHeight)
    console.log(randomWidth)
  }
  const handleClick=()=>{
    
    if(hideTree){
      setTimeout(()=>{
        setHideTree(prev=>!prev);
        generateRandomPosition();
      },1000)
    }
    setHideTree(prev=>!prev);
    generateRandomPosition();
    }

    const handleClickEmoji = (event) => {
      const randomIndex = Math.floor(Math.random() * emojiList.length);
      const newEmoji = {
        emoji: emojiList[randomIndex],
        x: event.clientX,
        y: event.clientY,
      };
      setEmojis([...emojis, newEmoji]);
    };
    
  return (
    <>
      <div  style={{
          position: "absolute",
          top: `${randomHeight}px`,
          left: `${randomWidth}px`,
          zIndex: 30,
          opacity: hideTree ? 0.025 : 1,
        }} onClick={handleClick}>
          {hideTree===false ? "ohhhh you find me try one more time ":""}
        <Image src="/images/egg/tree.png" alt="" width={200} height={350} />
      </div>
      <div className="absolute" onClick={handleClickEmoji} style={{ height: '100vh' }}>
      {emojis.map((emoji, index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            left: emoji.x,
            top: emoji.y,
            fontSize: '2rem',
          }}
        >
          {emoji.emoji}
        </span>
      ))}
    </div>

      <Hero/>
      <Features />
      <Video />
      <Blog />
    </>
  );
}
