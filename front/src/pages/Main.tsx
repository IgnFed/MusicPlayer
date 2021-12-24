import { Input, MusicCard, Player } from "@components/index";
import s from '@styles/Main.module.css';

export default function Main():JSX.Element {

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
          <MusicCard />
        </div>
      </section>

      <section className={`${s.bot}`}>
        <div className={`${s.playerContainer}`}>
          <Player />
        </div>
      </section>
    </>
  )
}