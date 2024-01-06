import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./assets/pages/home";
import { AboutTechnology } from "./assets/pages/about/technologyAbout";
import { Quiz } from "./assets/pages/quiz";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutTechnology" element={<AboutTechnology />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App
