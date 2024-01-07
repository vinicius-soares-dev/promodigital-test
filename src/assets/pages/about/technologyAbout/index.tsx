import { Link } from "react-router-dom";

import backIcon from "../../../img/icons8-voltar-24.png";
import seeMoreIcon from "../../../img/icons8-see-more-24.png";
import laptopIcon from "../../../img/icons8-notebook-50.png";
import starIcon from "../../../img/icons8-estrela-32.png";
import noteIcon from "../../../img/icons8-nota-24.png";
import clockIcon from "../../../img/icons8-relógio-24.png";

import "../../../styles/aboutTechnology/style.css";

export const AboutTechnology = () => {
    return (
        <>
            <header className="header-technology">
                <Link to="/">
                    <img src={backIcon} alt="back icon" className="backIcon"></img>
                </Link>
                <h3 className="title-header">Detail Quiz</h3>
                <img src={seeMoreIcon} alt="see more icon" className="seeMoreIcon"></img>
             </header>
        
            <main className="main-container">
                <section className="details-technology">
                    <section className="laptop-image">
                        <img src={laptopIcon} alt="laptop image"></img>
                    </section>

                    <section className="about-quiz">
                        <p className="title-quiz">Technology</p>
                        <p className="description-quiz">10 Question</p>
                    </section>

                    <section className="evaluation-section">
                        <img src={starIcon} alt="star icon"></img>
                        <span>4.8</span>
                    </section>

                </section>

                <section className="explanation-quiz">
                    <h4 className="title-explanation">Brief explanation about this quiz</h4>

                    <section className="number-question">
                        <section className="question-img">
                            <img src={noteIcon} alt="note icon"></img>
                        </section>

                        <section className="description-question">
                            <p>10 Question</p>
                            <p>10 point for a correct answer</p>
                        </section>
                    </section>


                    <section className="duration-quiz">
                        <section className="clock-img">
                            <img src={clockIcon} alt="clock icon">
                            </img>
                        </section>

                        <section className="description-duration">
                            <p>1 hour 20 min</p>
                            <p>Total duration of the quiz</p>
                        </section>
                    </section>
                </section>

                <section className="read-container">
                    <h4>Please read the text below carefully so you can understand it</h4>
                    <ul>
                        <li>10 point awarded for a correct answer and no marks for a incorrect answer</li>
                        <li>Tap on options to select the correct answer</li>
                        <li>Click submit if you are sure you want to complete all the quizzes</li>
                    </ul>
                </section>

                <Link to={"/quiz"} target="_self">
                    <button>Get Started</button>
                </Link>
            </main>
        
        </>
    )
}