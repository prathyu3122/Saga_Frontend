import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/Home/Main/HomePage';
import DescriptionCard from './Components/Home/Body/DescriptionCard';
import AddingArticles from './Components/Articles/AddingArticlePage';
import AllArticles from './Components/Articles/AllArticles';
import AllGenres from './Components/Genres/AllGenres';
import GenrePage from './Components/Genres/GenrePage';
import Article from './Components/Articles/Article';
import AllAuthors from './Components/Authors/AllAuthors';
import AuthorPage from './Components/Authors/AuthorPage';
import Register from './Components/Registration/Register';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/addarticle" element={<AddingArticles />} />
      <Route path="/all-articles" element={<AllArticles />} />
      <Route path="/genres" element={<AllGenres />} />
      <Route path="/genre-articles" element={<GenrePage />} />
      <Route path="/article" element={<Article />} />
      <Route path="/authors" element={<AllAuthors />} />
      <Route path="/author-articles" element={<AuthorPage />} />
      {/* Need to change */}
      <Route path="/login" element={<Register />} />
    </Routes>
      
    </div>
  );
}

export default App;
