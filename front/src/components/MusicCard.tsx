import { TPropsExtra, } from '@utils/types'
import { dynamicCSSClassList, joinCSSId } from '@src/utils/functions'
import LogoPlay from '@public/VideoLogo.svg';
import LogoPause from '@public/VideoLogoPause.svg';
import { IMusic } from '@src/utils/interfaces';
import { MouseEvent, Ref } from 'react';
import { useMusicCtx } from '@src/utils/context/MusicPlayContext';

export default function MusicCard<
  MusicProps extends TPropsExtra & IMusic & 
  {handleClick: ((e?:MouseEvent<HTMLElement>)=>void)}
  >({
  
  CSSReference={},
  classNameList=[],
  id="",
  name='',
  handleClick
}:MusicProps){
  
  const { currentPlaying, currentPlayingIcon } = useMusicCtx()

  return(
    <article
      // onDoubleClick={(e)=>handlePlayWithDoubleClick}
      ref={currentPlaying}
      className={`${dynamicCSSClassList(CSSReference, classNameList)}`}
      id={joinCSSId(CSSReference, id)}
      onClick={handleClick}
    >
      <audio src={`http://localhost:3001/api/musics/${name}`}></audio>
      <header
        className={`${CSSReference.songPlay}`} 
        // onClick={(e)=>handlePlay}
        >

        <img ref={currentPlayingIcon} loading='lazy' src={LogoPlay} alt="Logo" />
      </header>
      <footer className={`${CSSReference.songName}`}><p>{name}</p></footer>
    </article>
  )
}