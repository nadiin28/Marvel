import { useState } from 'react';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.js';
import SingleComic from '../singleComic/SingleComic.js';
import ComicsList from '../comicsList/ComicsList.js';
import AppBanner from '../appBanner/AppBanner.js';

import decoration from '../../resources/img/vision.png';

const App = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <div className='app'>
      <AppHeader />
      <main>
        {/*  <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>
        <div className='char__content'>
          <ErrorBoundary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
        </div>
        <img className='bg-decoration' src={decoration} alt='vision' /> */}
        <AppBanner />
        <ComicsList />
      </main>
    </div>
  );
};

export default App;
