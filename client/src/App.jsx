import './style/App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Characters from './Characters';
import CharacterInfo from './CharacterInfo';
import Weapons from './Weapons';
import WeaponInfo from './WeaponInfo';
import Artifacts from './Artifacts';
import ArtifactInfo from './ArtifactInfo';
import Food from './Food';
import FoodInfo from './FoodInfo';
import Profile from './Profile';
import EditProfile from './EditProfile';
import About from './About';
import Contact from './Contact';
import EasterEggInfo from './EasterEggInfo';
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
          <Route exact path="/food" element={<Food />} />
          <Route exact path="/food/:name" element={<FoodInfo />} />          
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/paimon" element={<EasterEggInfo />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
