import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/Home/Main/HomePage';
import DescriptionCard from './Components/Home/Body/DescriptionCard';
import AddingArticles from './Components/Articles/AddingArticlePage';
import AllArticles from './Components/Articles/AllArticles';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/addarticle" element={<AddingArticles />} />
      <Route path="/all-articles" element={<AllArticles />} />
    </Routes>
      
    </div>
  );
}

export default App;
