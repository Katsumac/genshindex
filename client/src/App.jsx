import './style/App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import CharacterInfo from './CharacterInfo';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Characters from './Characters';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characterInfo" element={<CharacterInfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
