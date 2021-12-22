import { Request, Response } from "express";
import { createReadStream, statSync, ReadStream } from 'fs';
import { IncomingHttpHeaders } from "http";
import { join } from "path";


function pipeMusicStream(req:Request, res:Response, file:string)//:ReadStream
{

  const dir = join(__dirname, '../musics/', file)
  // const range = req.headers.range || "0-";
  // const CHUNK = 10e6;

  const fileSize = statSync(dir).size;
  
  // const start = Number(range.replace(/\D/g, ""));
  // const end = Math.min(start + CHUNK , fileSize - 1);
  // const contentLength = end - start + 1;
  
  const headers:IncomingHttpHeaders = {
    "content-range": `bytes 0-${fileSize-1}/${fileSize}`,
    "accept-ranges": "bytes",
    "content-length":`${fileSize}`,
    "content-type": 'audio/mpeg',
  }
  res.writeHead(206, headers);
  const rStream = createReadStream(dir);
  rStream.pipe(res);
  rStream.on('end', ()=> rStream && rStream.destroy())
}

export { pipeMusicStream };