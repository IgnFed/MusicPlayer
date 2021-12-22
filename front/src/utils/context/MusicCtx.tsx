import { useContext, useState, createContext, useRef, Ref, MouseEvent, MutableRefObject, RefObject } from "react";
import { IMusic } from '@utils/interfaces';

export interface IMusicContextValues{
  musics: Array<IMusic>,
  currentMusic:any,
  showRef: ((e:MouseEvent<HTMLElement>)=>void)
}

export const MusicCtx = createContext<IMusicContextValues>({} as IMusicContextValues);

export const useMusicCtx = function(){return useContext(MusicCtx)};

export default function MusicProvider({children}:any):JSX.Element{

  const [ musics, setMusics ] = useState<IMusic[]>([]);
  const [isPlaying, setIsPlaying] = useState(false)
  const currentMusic = useRef<HTMLAudioElement>();
  async function showRef(e:MouseEvent<HTMLElement>){
    const audioChild:HTMLAudioElement = e.currentTarget.firstChild;
    if(!currentMusic){
      currentMusic.current = audioChild;
      audioChild.play();
      setIsPlaying(true)
    }
    if(currentMusic.current && currentMusic.current !== audioChild ){
      currentMusic.current.pause();
      currentMusic.current.currentTime = 0;
      currentMusic.current = audioChild;
      audioChild.play();
      setIsPlaying(true);
    }
    else if(isPlaying){
      setIsPlaying(false)
      audioChild.pause();

    }else{
      setIsPlaying(true)
      audioChild.play();
    }
  }

  return <MusicCtx.Provider value={{
    musics,
    currentMusic,
    showRef,
  }}>
    {children}
  </MusicCtx.Provider>
}