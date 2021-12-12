import { LinkItem } from ".";
import { PlayIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'

export default function Player<P extends {CSSRef:CSSModuleClasses}>({
  CSSRef
}:P):JSX.Element{

  return(
    <footer id={`${CSSRef.player || ''}`}>
      <div className={`${CSSRef?.title || ''}`}>
        REOL SECCION ES ALGO ASI COMO LA GRAN OBRA MAESTRA
      </div>
      <div className={`${CSSRef?.player_opts || ''}`}>
        <ul className={`${CSSRef?.opts_list || ''}`}>
        <LinkItem 
            aTag={{
              to:"#"
            }}
          >
            <ArrowLeftIcon className="icon"/>
          </LinkItem>
          <LinkItem 
            aTag={{
              to:"#"
            }}
          >
            <PlayIcon className="icon"/>
          </LinkItem>
          <LinkItem 
            aTag={{
              to:"#"
            }}
          >
            <ArrowRightIcon className="icon"/>
          </LinkItem>
        </ul>
      </div>
    </footer >
  )
}