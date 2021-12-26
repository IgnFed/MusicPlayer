import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  resolve:{
    alias:[
      {find: '@src', replacement:path.resolve(__dirname, './src')},
      {find: '@utils', replacement:path.resolve(__dirname, './src/utils')},
      {find: '@pages', replacement:path.resolve(__dirname, './src/pages')},
      {find: '@styles', replacement:path.resolve(__dirname, './src/styles')},
      {find: '@components', replacement:path.resolve(__dirname, './src/components')},
      {find: '@public', replacement:path.resolve(__dirname, './src/public')},
      {find: '@hooks', replacement:path.resolve(__dirname, './src/hooks')},
      // {find: '@interfaces', replacement:path.resolve(__dirname, './src/utils/interfaces')},
      // {find: '@types', replacement:path.resolve(__dirname, './src/utils/types')},
      // {find: '@functions', replacement:path.resolve(__dirname, './src/utils/functions')},
    ]
  },

  plugins: [react()]
})
