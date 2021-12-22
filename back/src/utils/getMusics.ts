import { readdirSync } from "fs";
import { join } from "path";
import IMusic from "../models/music.interface";
import getFileExtension from "./getFileExtension";
import getFileNameWithoutExtension from "./getFileNameWithoutExtension";

export default function():Array<IMusic>{

  const EXCLUDE_FILES_BY_EXTENSIONS = ['.json'];
  const allowedFiles:Array<IMusic> = [];
  const pathToMusics = join(__dirname, '../musics/')
  const files = readdirSync(pathToMusics);
    if (!files) return [];

    files.forEach((file)=> {
    const fileName = getFileNameWithoutExtension(file);
    const fileExtension = getFileExtension(file)
    allowedFiles.push({
      name:fileName,
      type:fileExtension,
      path: 'musics/' + file
    })
  });
    return allowedFiles;
  }