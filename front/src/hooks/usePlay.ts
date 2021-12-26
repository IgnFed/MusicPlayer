import { MouseEvent, Ref, useState } from 'react';
import LogoPlay from '@public/VideoLogo.svg';
import LogoPause from '@public/VideoLogoPause.svg';

interface HTMLArticleElement extends HTMLElement{}
interface HTMLHeaderElement extends HTMLElement{}

export default function useChangePlayIcon(){
  const [ isPlaying, setIsPlaying ] = useState(false);

  function handlePlay(e?:MouseEvent<HTMLArticleElement>, , ref:Ref<HTMLElement>){

    setIsPlaying(prev =>{
      
      const imgElement:HTMLImageElement = cardArticleElement.current.firstElementChild?.firstChild;
      if(prev){
        imgElement.src = LogoPlay
      }
      else{
        imgElement.src = LogoPause

      }
      return !prev
    });  
  }
  function handlePlayWithDoubleClick(e?:MouseEvent<HTMLHeaderElement>, ref:Ref<HTMLElement>){
    setIsPlaying(prev => !prev);
  }

  return {
    isPlaying,
    setIsPlaying,
    handlePlay,
    handlePlayWithDoubleClick,
    cardArticleElementRef,
  }
}