export default function dynamicCSSClassList(CSSRef?:CSSModuleClasses, classList?: string[]){
  if(!CSSRef || !classList) return '';
  return classList.map((cls)=> CSSRef[cls] );
}