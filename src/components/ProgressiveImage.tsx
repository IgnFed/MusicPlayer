import { useEffect, useState } from "react";
import { TProgressiveImage } from "@utils/types";

export default function ProgressiveImage<P extends TProgressiveImage>({src="", placeholder="", title=""}:P):JSX.Element{

  const [data, setData] = useState({currentSrc:placeholder, loading:true});

  useEffect(()=>{
    if(!src) return;
    const img = new Image();
    img.src = src;
    img.addEventListener("load", ()=>{
      setData(prev =>(
        {...prev, currentSrc:src, loading:false}
      ))
    })

    return img.removeEventListener("load", ()=>{});
    
  }, [src])

  return(
    <img src={data.currentSrc} alt={title} style={{opacity:data.loading ? .7 : 1, width: "100%", height:"100%"}} />
  );
}