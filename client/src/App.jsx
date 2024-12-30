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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/characters" element={<Characters />} />
          <Route exact path="/characters/:name" element={<CharacterInfo />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
