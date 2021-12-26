import { useContext, useState, useRef, createContext, Ref, MouseEvent, SetStateAction} from 'react';
import LogoPlay from '@public/VideoLogo.svg';
import LogoPause from '@public/VideoLogoPause.svg';
import { IMusic } from '@utils/interfaces';

interface HTMLArticleElement extends HTMLElement{}
// interface HTMLHeaderElement extends HTMLElement{}


export interface IMusicContext{
  musics: Array<IMusic>,
  currentPlaying: any,
  currentPlayingIcon: any,
  musicIsPlaying: ()=>boolean,
  setIsPlaying: any,
  play:()=>void,
  setMusics: any;
  // setMuicsList: ()=>void,
}

const MusicIsPlayingContext = createContext<IMusicContext>({} as IMusicContext);

export function useMusicCtx(){ return useContext(MusicIsPlayingContext);}

export function MusicProvider(props:any){
  const [musics, setMusics] = useState<IMusic[]>([]);
  const [ isPlaying , setIsPlaying ] = useState(false);
  const currentPlaying = useRef<HTMLElement | null>(null);
  const currentPlayingIcon = useRef<HTMLImageElement | null>(null);

  function musicIsPlaying(){
    return isPlaying;
  }

  function currentIsPlaying(){
    return currentPlaying.current;
  }

  // function setMuicsList(cb:()=>void){
  //   useEffect(()=>{
  //     fetch('http://localhost:3001/api/musics/')
  //       .then(async (MusicResponse)=>{
  //         const parseMusics:IMusic[] = await MusicResponse.json();
  //         setMusics(prev =>{
  //           cb();
  //           return [...prev, ...parseMusics];
  //         });
  //       });
  //   })
  // }

  function play(e: MouseEvent<HTMLArticleElement>){
    const newAudioElement =  e.currentTarget.children.item(0) as HTMLAudioElement;
    const prevAudioElement =  currentPlaying?.current?.children.item(0) as HTMLAudioElement;

    const newImgIcon = e.currentTarget.children.item(1)!.firstElementChild as HTMLImageElement
    const prevImgIcon = currentPlaying?.current?.children.item(1)!.firstElementChild as HTMLImageElement;

    if(!currentPlaying.current || currentPlaying.current !== e.currentTarget){
      currentPlaying.current = e.currentTarget;
      // newAudioElement.src= `http://localhost:3001/api/musics/${musics[0].name}`
      newAudioElement.play();
      setIsPlaying(true);
      currentPlayingIcon.current = newImgIcon;
      currentPlayingIcon.current.src = LogoPause

    }


    if(currentPlaying.current){
      currentPlayingIcon.current = newImgIcon;
      
      if(!isPlaying && prevAudioElement === newAudioElement){
        prevAudioElement.play();
        setIsPlaying(true);
        currentPlayingIcon.current.src = LogoPause

        }
      else if(isPlaying && prevAudioElement === newAudioElement ){
        prevAudioElement.pause();
        setIsPlaying(false);
        currentPlayingIcon.current.src = LogoPlay

      }
      else if(isPlaying && prevAudioElement !== newAudioElement ){
        prevAudioElement.pause();
        prevAudioElement.currentTime = 0
        newAudioElement.play();
        setIsPlaying(true);
        prevImgIcon.src = LogoPlay
        currentPlayingIcon.current.src = LogoPause
      }

    }
    //Imagen ChildNode of Article card
  }

  return <MusicIsPlayingContext.Provider value={{
    currentPlaying,
    play,
    musicIsPlaying,
    musics,
    setMusics,
    setIsPlaying,
    currentPlayingIcon    // setMuicsList,

  } as IMusicContext} >
    {props.children}
  </MusicIsPlayingContext.Provider>
}
