import './style/App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Characters from './Characters';
import CharacterInfo from './CharacterInfo';
import Weapons from './Weapons';
import WeaponInfo from './WeaponInfo';
import Artifacts from './Artifacts';
import ArtifactInfo from './ArtifactInfo';
import Foods from './Food';
import FoodInfo from './FoodInfo';
import Profile from './Profile';
import EditProfile from './EditProfile';
import NotFound from './NotFound';

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
          <Route exact path="/weapons" element={<Weapons />} />
          <Route exact path="/weapons/:name" element={<WeaponInfo />} />
          <Route exact path="/artifacts" element={<Artifacts />} />
          <Route exact path="/artifacts/:name" element={<ArtifactInfo />} />
          <Route exact path="/food" element={<Foods />} />
          <Route exact path="/food/:name" element={<FoodInfo />} />          
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
