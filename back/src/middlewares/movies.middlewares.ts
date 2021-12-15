import { NextFunction, Request, Response } from 'express';
import { existsSync } from 'fs';
import { correctExtension } from '../utils/correctExtension.util';


function existFile(req:Request,res:Response, next:NextFunction){
  const correctPath = correctExtension(`${__dirname}/../music/${req.params.name}`);
  if(!existsSync(correctPath))  
    res.json("Path Not Found").status(404);
  
  next();
}

export { existFile }

