import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Character from './Character';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
