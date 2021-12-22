import { LinkItem } from '@components/index';
import { IMusicContextValues, useMusicCtx } from '@src/utils/context/MusicCtx';

export default function Card<P extends {CSSRef?:CSSModuleClasses; isInList?:boolean | undefined}>({
  CSSRef,
  isInList,
  src=''
}:P & any){

  const { musics, currentMusic, showRef } = useMusicCtx();


  return(
    <article id={`${CSSRef?.card || ''}`} onClick={showRef}>
      <audio src={src} ref={currentMusic}></audio>
      <section className={`${CSSRef?.edit_section || ''}`} >
        <input type="checkbox" />
      </section>
      
      <section className={`${CSSRef?.title_section || ''}`}>
        <span>Heimenkyou</span>
      </section>
      
      <section className={`${CSSRef?.opts_section || ''}`}>
        <ul className={`${CSSRef?.opt_list || ''}`}>
          <LinkItem 
            aTag={{
              to:"#"
            }}
          >
            <span>R</span>
          </LinkItem>
          {
            isInList && (<LinkItem 
            aTag={{
              to:"#"
            }}
          >
            <span>A</span>
          </LinkItem>)          
          
          ||
          (<LinkItem 
            aTag={{
              to:"#"
            }}
          >
            <span>B</span>
          </LinkItem>)
          }
        </ul>
      </section>
      
      <section className={`${CSSRef?.artist_section || ''}`}>
      <span>Reol</span>
      </section>
      
      <section className={`${CSSRef?.date_section || ''}`}>
        2019
      </section>
      
      <section className={`${CSSRef?.gender_section || ''}`}>
        Besto Music
      </section>
      
      <section className={`${CSSRef?.duration_section || ''}`}>
        4:00
      </section>
    </article>
  )
}