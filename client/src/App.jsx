import './style/App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Character from './Character';
import Profile from './Profile';
import EditProfile from './EditProfile';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/character" element={<Character />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
