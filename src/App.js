import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import ProtectedRoutes from './components/ProtectedRoutes';
import UserInput from './components/UserInput';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={ <UserInput /> } />

          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={ <Pokedex /> } />
            <Route path='/pokemon/:id' element={ <PokemonDetails /> } />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
