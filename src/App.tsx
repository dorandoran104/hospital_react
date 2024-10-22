import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigator from './components/Navigator';

import MainPage from './pages/home/home'; 
import SearchPage from './pages/search/search';

function App() {
  return (
    <Router>
      <Navigator/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path="/search/:name" element={<SearchPage/>}/>
      </Routes>

    </Router>
  );
}

export default App;
