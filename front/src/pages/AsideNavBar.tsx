import { LinkItem } from "@src/components";
import s from '@styles/AsideNavBar.module.css';
import MusicLogo from '@public/MusicPlayerLogoWithe.svg';


export default function AsideNavBar(){

  return(
    <>
      <header className={`${s.left_side__logo_container}`}>
        <a href={`#`} id={`${s.logo}`} >
          <img src={`${MusicLogo}`} alt="" />
        </a>
      </header>
      <ul className={`${s.left_side__pages_list}`}>
        <LinkItem 
          liTag={{
            CSSReference:s,
            classNameList: ["pages_list__link"],
            id: "home",
          }}
          aTag={{
            to:"#",
            isReact:false,
            CSSReference: s,
          }}

        >
          <span>Home</span>
        </LinkItem>

      </ul>
    </>
  )
}