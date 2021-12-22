export default function getFileExtension(file:string):string{
  const regex =  new RegExp(/\w+$/, "g");
  return file.match(regex)?.[0] || '';
}