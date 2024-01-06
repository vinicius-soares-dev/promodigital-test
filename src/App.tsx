import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./assets/pages/home";
import { AboutTechnology } from "./assets/pages/about/technologyAbout";
import { QuizTechnology } from "./assets/pages/quiz/technologyQuiz";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutTechnology" element={<AboutTechnology />} />
        <Route path="/quiz" element={<QuizTechnology />} />
      </Routes>
    </Router>
  )
}

export default App
