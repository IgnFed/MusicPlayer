import { TProps, TPropsExtra } from '@utils/types'
import { dynamicCSSClassList, joinCSSId } from '@utils/functions/'
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface LinkItem{
  liTag?:TPropsExtra,
  aTag: TPropsExtra & {
    isReact?: boolean | undefined,
    to:string | undefined
    events?:{
      onClick: MouseEventHandler<HTMLAnchorElement>,
    }
  },
}

export default function LinkItem<P extends LinkItem & TProps>({
  children,
  liTag,
  aTag,
}:P):JSX.Element{

  return(
    <li
      className={`${dynamicCSSClassList(liTag?.CSSReference, liTag?.classNameList)}`}
      id={`${joinCSSId(liTag?.CSSReference, liTag?.id)}`}
    >
      {
        !aTag.isReact && (
          <a 
          href={aTag.to}
          className={`${dynamicCSSClassList(aTag.CSSReference, aTag.classNameList)}`}        
          id={`${joinCSSId(aTag.CSSReference, aTag.id)}`}
          onClick={aTag.events?.onClick}
          >
          {children}
        </a>
        )
          ||
        (
          <Link 
          to={aTag.to || ''}
          className={`${dynamicCSSClassList(aTag.CSSReference, aTag.classNameList)}`}        
          id={`${joinCSSId(aTag.CSSReference, aTag.id)}`}
          onClick={aTag.events?.onClick}
          >
          {children}
        </Link>

        )

      }
    </li>
  );
}