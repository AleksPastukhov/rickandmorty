import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import GloblStyle from './GlobalStyle';
import {
  getAllCharacters,
  getCharacterById,
} from '../services/theRickandmortyApi';

const Home = lazy(() => import('./pages/Home/Home'));
const Character = lazy(() => import('./pages/Character/Character'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

getAllCharacters().then(console.log).catch(console.log);
getCharacterById().then(console.log).catch(console.log);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="character/:characterId" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <GloblStyle />
    </div>
  );
};