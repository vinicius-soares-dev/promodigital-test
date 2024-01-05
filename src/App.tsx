import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./assets/pages/home";
import { About } from "./assets/pages/about";
import { Quiz } from "./assets/pages/quiz";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App
