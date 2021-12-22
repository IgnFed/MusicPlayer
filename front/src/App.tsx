import { BaseSyntheticEvent, lazy, MouseEvent, MouseEventHandler, Suspense, useEffect, useRef } from 'react';
import { AsideNavBar } from '@pages/index';
import MusicProvider from './utils/context/MusicCtx';

const Main = lazy(()=> import('@pages/Main'));


export default function App(){
  
  return(
    <div id="app_grid">
        <AsideNavBar/>
        <Suspense fallback={<h1>Loading</h1>}>
          <MusicProvider>
            <Main />
          </MusicProvider>
        </Suspense>
    </div>
  );
}