import { Request, Response } from "express";
import { createReadStream, statSync } from 'fs';
import { IncomingHttpHeaders } from "http";

function pipeMusicStream(req:Request, res:Response, dir:string){
  const range = req.headers.range || '0-';
  const CHUNK = 10e6;

  const fileSize = statSync(dir).size;
  
  
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK , fileSize - 1);

  const contentLength = end - start + 1;
  const headers:IncomingHttpHeaders = {
    "content-range": `bytes ${start}-${end}/${fileSize}`,
    "accept-ranges": "bytes",
    "content-length":`${contentLength}`,
    "content-type": 'audio/mpeg',
  }
  res.writeHead(206, headers);
  const rStream = createReadStream(dir);
  rStream.pipe(res);
}

export { pipeMusicStream };