import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/Home/Main/HomePage';
import AddingArticles from './Components/Articles/AddingArticlePage';
import AllArticles from './Components/Articles/AllArticles';
import AllGenres from './Components/Genres/AllGenres';
import GenrePage from './Components/Genres/GenrePage';
import Article from './Components/Articles/Article';
import AllAuthors from './Components/Authors/AllAuthors';
import AuthorPage from './Components/Authors/AuthorPage';
import Register from './Components/Registration/Register';
import Login from  './Components/Login/Login';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/addarticle" element={<AddingArticles />} />
      <Route path="/all-articles" element={<AllArticles />} />
      <Route path="/genres" element={<AllGenres />} />
      <Route path="/genre-articles" element={<GenrePage />} />
      <Route path="/article" element={<Article />} />
      <Route path="/authors" element={<AllAuthors />} />
      <Route path="/author-articles" element={<AuthorPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
      
    </div>
  );
}

export default App;
