import HomePage from './components/HomePage.js';
import './App.css';
import { MovieContext, MovieProvider } from './MovieContent.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.js';
import SearchPage from './components/SearchPage.js';
import AddMovie from './components/AddMovie.js';

function App() {
  return (
    <MovieProvider>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/results/:params" element={<SearchPage />} />
          <Route path="/add_movie" element={<AddMovie />} />
        </Routes>
      </Router>

    </MovieProvider>
  );
}

export default App;
