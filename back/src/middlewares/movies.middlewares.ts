import { NextFunction, Request, Response } from 'express';
import { existsSync } from 'fs';
import { correctExtension } from '../utils/correctExtension.util';


function existFile(req:Request,res:Response, next:NextFunction){
  const correctPath = correctExtension(`${__dirname}/../musics/${req.params.name}`);
  if(!existsSync(correctPath))
    res.json({message:'Not Found Path.'}).status(404)
  else{
    next();
  }
}

export { existFile }

