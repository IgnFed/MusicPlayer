import express, { Application } from "express";
import cors from 'cors';
 
import moviesRouter from './routes/movies.routes';

export default class Server{
  private app:Application;
  private port?:number | string;
  private paths = {
    musics: '/api/musics',
  }

  constructor(port?:number){
    this.app = express();
    this.port = port || process.env.port || 3001;
  }

  routes(){
    this.app.use(this.paths.musics, moviesRouter);
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));
  }

  listen(){
    this.middlewares();
    this.routes();
    this.app.listen(this.port, ()=>{
      console.log(`Listening on port: http://localhost:${this.port}/api/musics`);
    })
  }
}