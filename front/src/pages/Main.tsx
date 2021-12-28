import { Input, MusicCard } from "@components/index";
import { useMusicCtx } from "@src/utils/context/MusicPlayContext";
import { IMusic } from "@src/utils/interfaces";
import s from '@styles/Main.module.css';
import { useEffect } from "react";

export default function Main():JSX.Element {


  const { musics, fnSetMusics, play, currentPlaying } = useMusicCtx();
  fnSetMusics();
  
  return (
    <>
      <section className={`${s.top}`}>
        <div className={`${s.inputContainer}`}>

          <Input
            input={{
              attrs:{
                name:'Music Searcher',
              },
              cssProps:{
                CSSReference:s,
                id:"searcher",
              },
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
            musics.map((v,k)=>(
              <MusicCard key={k} CSSReference={s} name={v.name} classNameList={["card"]} handleClick={play} />
            ))
          }
        </div>
      </section>
    </>
  )
}