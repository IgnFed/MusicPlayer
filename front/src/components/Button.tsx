import { TProps, TPropsExtra } from '@utils/types';

type TButton = {
  type?:'button' | 'reset' | 'submit' | undefined
}

export default function Button<P extends TProps & TPropsExtra & {id:string} & TButton>({
  children,
  CSSReference={},
  id="",
  type
}:P):JSX.Element{

  return(
    <button type={type || "button"} id={`${CSSReference?.[id]}`} className={`${CSSReference.btn}`}>
      {children}
    </button>
  );
}