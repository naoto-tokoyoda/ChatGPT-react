
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Topbar from "./components/topbar/Topbar";
import Translation from "./components/translation/Translation";
import Home from "./pages/home/Home";
import GenerateImage from "./components/generateImage/GenerateImage";
import QandA from "./components/QandA/QandA";

function App() {
  return(
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/generateImage" element={<GenerateImage />}/>
          <Route path="/translation" element={<Translation />}/>
          <Route path="/qa" element={<QandA />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
