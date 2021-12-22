import { Response, Request } from 'express';
import { correctExtension } from '../utils/correctExtension.util';
import getMusics from '../utils/getMusics';
import { pipeMusicStream } from '../utils/pipeMusicStream.util';

async function getAllMovies(req:Request,res:Response){
  const r = getMusics();  
  res.json({
    musics:r
  })
};

async function getMoiveByName(req:Request, res:Response){
  const { name } = req.params;
  const correctPath = correctExtension(name);
  pipeMusicStream(req, res, correctPath);


}

export { getAllMovies, getMoiveByName };