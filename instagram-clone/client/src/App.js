
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import HomePage from './pages/HomePage/HomePage';
import MessagePage from './pages/MessagePage/MessagePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<HomePage />} ></Route>
        <Route path='/explore' element={<ExplorePage />} ></Route>
        <Route path='/messages' element={<MessagePage />} ></Route>
        <Route path='/profile' element={<ProfilePage />} ></Route>
      </Routes>

    </div>
  );
}

export default App;
