import { Response, Request } from 'express';
import IMusic from '../models/music.interface';
import musicsJson from '../music/musics.json';
import { correctExtension } from '../utils/correctExtension.util';
import { pipeMusicStream } from '../utils/pipeMusicStream.util';

async function getAllMovies(req:Request,res:Response){
  const musicsObj:Array<IMusic> = musicsJson;

  res.json({
    musics:musicsObj
  })
  
};

async function getMoiveByName(req:Request, res:Response){
  const { name } = req.params;
  console.clear()
  const correctPath = correctExtension(`${__dirname}/../music/${name}`);
  pipeMusicStream(req, res, correctPath);
}

export { getAllMovies, getMoiveByName };