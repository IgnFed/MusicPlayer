import { Input, MusicCard } from "@components/index";
import { useMusicCtx } from "@src/utils/context/MusicPlayContext";
import { useInputCtx } from "@src/utils/context/InputContext";
import s from '@styles/Main.module.css';
import { useEffect } from "react";

export default function Main():JSX.Element {


  const { musics, musicFilter, fnSetMusicFilter, fnSetMusics, play } = useMusicCtx();
  const { value, onChange } = useInputCtx(); 
  fnSetMusics();
  useEffect(()=>{
    fnSetMusicFilter(value);
  }, [value])

  return (
    <>
      <section className={`${s.top}`}>
        <div className={`${s.inputContainer}`}>

          <Input
            input={{
              attrs:{
                name:'Music Searcher',
                value:value
              },
              cssProps:{
                CSSReference:s,
                id:"searcher",
              },
              events:{
                onChange
              }
            }}
            label={{
              position:'before',
              attrs:{
                htmlFor:'searcher',
                content:'Search:'
              },
              cssProps:{
                CSSReference:s,
                classNameList:['label']
              }
            }}
          />

        </div>
      
      </section>

      <section className={`${s.mid}`}>
        <div className={`${s.cardsContainer}`}>
          {
            (musicFilter.length > 0 ? musicFilter : musics).map((v,k)=>(
              <MusicCard key={k} CSSReference={s} name={v.name} classNameList={["card"]} handleClick={play} />
            ))
          }
        </div>
      </section>
    </>
  )
}