import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* import { MainPage, ComicsPage, SingleComicPage } from '../pages'; */

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner.js';

const Page404 = lazy(() => import('../pages/404.js'));
const MainPage = lazy(() => import('../pages/MainPage.js'));
const ComicsPage = lazy(() => import('../pages/ComicsPage.js'));
const SingleComicLayout = lazy(() =>
  import('../pages/singleComicLayout/SingleComicLayout'),
);
const SingleCharacterLayout = lazy(() =>
  import('../pages/singleCharacterLayout/SingleCharacterLayout'),
);
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {
  return (
    <Router>
      <div className='app'>
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/comics' element={<ComicsPage />} />
              <Route
                path='/comics/:id'
                element={<SinglePage Component={SingleComicLayout} dataType='comic' />}
              />
              <Route
                path='/characters/:id'
                element={
                  <SinglePage Component={SingleCharacterLayout} dataType='character' />
                }
              />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
