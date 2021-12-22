export default function getFileNameWithoutExtension(file:string):string{
  
  const lastDot = file.lastIndexOf('.');

  return file.slice(0, lastDot)
}