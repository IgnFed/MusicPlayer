import express, { Application } from "express";
import cors from 'cors';
 
import moviesRouter from './routes/movies.routes';

export default class Server{
  private app:Application;
  private port?:number | string;
  private paths = {
    movies: '/api/movies',
  }

  constructor(port?:number){
    this.app = express();
    this.port = port || process.env.port || 3001;
    this.middlewares();
    this.routes();
  }

  routes(){
    this.app.use(this.paths.movies, moviesRouter);
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));
  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log(`Listening on port: http://localhost:${this.port}/api/movies`);
    })
  }
}