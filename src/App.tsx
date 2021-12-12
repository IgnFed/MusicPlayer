import { lazy, Suspense } from 'react';
import { AsideNavBar } from '@pages/index';

const Main = lazy(()=> import('@pages/Main'));

export default function App(){

  return(
    <div id="app_grid">
        <AsideNavBar/>
        <Suspense fallback={<h1>Loading</h1>}>
          <Main />
        </Suspense>
    </div>
  );
}