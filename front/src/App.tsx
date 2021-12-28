import { lazy,  Suspense } from 'react';
import { AsideNavBar } from '@pages/index';
import { MusicProvider } from './utils/context/MusicPlayContext';
import { InputContextProvider } from './utils/context/InputContext';

const Main = lazy(()=> import('@pages/Main'));

export default function App(){
  
  return(
    <div id="app_grid">
      <aside id={`left_side`}>
        <AsideNavBar/>
      </aside>
      <main id={"right_side"}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <InputContextProvider>
            <MusicProvider>
              <Main />
            </MusicProvider>
          </InputContextProvider>
        </Suspense>
      </main>
    </div>
  );
}