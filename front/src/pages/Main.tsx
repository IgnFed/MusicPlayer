import { lazy, Suspense } from 'react';
import { Card } from '@src/components';
import s from '@styles/Main.module.css';

const Player = lazy(()=> import('@components/Player'));

export default function Main(){

  
  return(
    <main id={`right_side`}>
      <header className={`${s.main_content}`}>
        <div className={`${s.searcher_container}`}>
          <input type="text" id={`${s.searcher}`}/>
        </div>
        <section className={`${s.musics_container}`}>
          <Card CSSRef={s} src={"http://localhost:3001/api/movies/def"}/>
          <Card CSSRef={s} src={"http://localhost:3001/api/movies/eighty_six"}/>
          <Card CSSRef={s} src={"http://localhost:3001/api/movies/eighty_six.mp3"}/>
        </section>
      </header>

      <Suspense fallback={<span>Loading Player...</span>}>
        <Player CSSRef={s}/>
      </Suspense>
    </main>
  )
}