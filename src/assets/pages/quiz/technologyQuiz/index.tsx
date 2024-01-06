import { Link } from "react-router-dom";

import backIcon from "../../../img/icons8-voltar-24.png";
import clockIcon from "../../../img/icons8-relógio-24.png";
import boxSelect from "../../../img/icons8-caixa-de-seleção-desmarcada-16.png";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import "../../../styles/technologyQuiz/style.css";

export const QuizTechnology = () => {
  return (
    <>
      <header className="header-technology-quiz">
          <Link to="/aboutTechnology" target="_self">
              <img src={backIcon} alt="back icon" className="backIcon"></img>
          </Link>
          <h3 className="title-header">Technology</h3>
          <section className="stopwatch">
            <img src={clockIcon} alt="clock icon"></img>
            <p>16:35</p>
          </section> 
      </header>

      <Box sx={{ width: '80%', margin: '2em' }} >
          <LinearProgress variant="determinate" value={64} />
          <p>Completed 64%</p>
      </Box>

      <main className="main-container">
        <h3 className="title-main">The image below is a field image used for?</h3>
        <section className="image-quiz">
        </section>

        <ul className="alternatives-quiz">
          <li> <img src={boxSelect} alt="box select" />Football</li>
          <li> <img src={boxSelect} alt="box select" /> Basketball</li>
          <li><img src={boxSelect} alt="box select" /> Volleyball</li>
          <li> <img src={boxSelect} alt="box select" /> Shuttlecock</li>
        </ul>

        <section className="buttons-options">
          <button className="previous-button">
            Previous
          </button>

          <button className="next-button">
            Next
          </button>
        </section>

      </main>
    
    
    </>
  )
}