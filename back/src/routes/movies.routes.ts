import { Router } from 'express';

import { getAllMovies, getMoiveByName } from '../controllers/movies.controller';
import { existFile } from '../middlewares/movies.middlewares';


const route = Router();

route.get('/', getAllMovies);
// route.get('/:name', existFile, getMoiveByName);


export default route;