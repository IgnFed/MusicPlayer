export default function joinCSSId(CSSReference?:CSSModuleClasses, id?:string){
  if(!CSSReference || !id) return '';
  return CSSReference.id
}