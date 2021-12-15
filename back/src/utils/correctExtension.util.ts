function correctExtension(name:string):string{
  const extensions = [".mp3"];
  
  const ext = name.match(/.mp3+$/g)?.toString() || '';
  let correct = ''

  if(!extensions.includes(ext)) correct = `${name}${extensions[0]}`;

  return correct ? correct : name;
}

export { correctExtension }