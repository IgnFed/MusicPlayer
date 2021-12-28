import { dynamicCSSClassList, joinCSSId } from "@src/utils/functions";
import { TInput } from "@utils/types";


export default function Input<T extends TInput>({
 input,
 label,
}:T):JSX.Element{
  
  const inputId = joinCSSId(input?.cssProps.CSSReference, input?.cssProps.id)

  return(
    <>
      {
        label?.position === 'before' && (
          <label
          htmlFor={inputId || ""}
          className={`${dynamicCSSClassList(label?.cssProps.CSSReference, label.cssProps.classNameList)}`}
          id={joinCSSId(label?.cssProps.CSSReference, label?.cssProps.id) || ""}
        >
          {label.attrs?.content}
        </label>
        )
      }
      <input 
        type={input?.attrs?.type || 'text'} 
        name={input?.attrs?.name || ""}
        value = {input?.attrs?.value || '' }
        placeholder={input?.attrs?.placeholder || "Search Something..."}
        className={`${dynamicCSSClassList(input?.cssProps.CSSReference, input?.cssProps.classNameList)}`}  
        id={inputId}
        onChange={input?.events?.onChange || undefined}
      />

    {
      label?.position === 'after' && (
        <label 
          htmlFor={inputId || ""} 
          className={`${dynamicCSSClassList(label?.cssProps.CSSReference, label.cssProps.classNameList)}`}
          id={joinCSSId(label?.cssProps.CSSReference, label?.cssProps.id) || ""}
        >
          {label.attrs?.content}
        </label>
      )
    }
    </>
  )
}