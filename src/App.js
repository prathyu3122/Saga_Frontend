import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/Home/Main/HomePage';
import DescriptionCard from './Components/Home/Body/DescriptionCard';
import AddingArticles from './Components/Articles/AddingArticlePage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/addarticle" element={<AddingArticles />} />
    </Routes>
      
    </div>
  );
}

export default App;
