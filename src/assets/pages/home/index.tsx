import { Header } from "../../components/Header";

import "../../styles/progress-bar/style.css";
import "../../styles/popular-quiz/style.css";
import "../../styles/recent-quiz/style.css";

import { Stack, CircularProgress } from "@mui/material";
import LaptopIcon from "../../img/icons8-notebook-50.png";
import SoccerBallIcon from "../../img/icons8-bola-de-futebol-2-50.png";
import MusicIcon from "../../img/icons8-adicionar-música-50.png";
import StarIcon from "../../img/icons8-estrela-32.png";
import BookIcon from "../../img/icons8-book-open-24.png";
import MicIcon from "../../img/icons8-microfone-24.png";

import { Link } from "react-router-dom";
import LinearWithValueLabel from "../../components/LinearProgress";


export const Home = () => {
    return (
        <>
            <Header />

            <section className="progress-bar">
                <Stack 
                    spacing={2} direction="row"
                >
                    <CircularProgress 
                        variant="determinate" 
                        value={75} 
                    />
                </Stack>
                <section className="result-bar">
                    <h4>Good Result!</h4>
                    <p>Share your achievement with your friend</p>
                </section>
            </section>

            <section className="recent-quiz">
                <p className="description-section">Recent Quiz</p>
                <section className="recent-activities">
                    <section className="reading-quiz">
                        <section className="book-img">
                            <img src={BookIcon} alt="book icon"></img>
                        </section>
                        <h5>Reading</h5>
                        <p>You completed 65%</p>
                        <LinearWithValueLabel />

                    </section>


                    <section className="speaking-quiz">
                        <section className="phone-img">
                            <img src={MicIcon} alt="mic icon"></img>
                        </section>
                        <h5>Speaking</h5>
                        <p>You completed 65%</p>
                        <LinearWithValueLabel />
                    </section>

                </section>
                

                
            </section>
            

            <section className="popular-quiz">
                <section className="technology-quiz">
                    <section className="laptop-img">
                        <img src={LaptopIcon} alt="laptop-design"></img>
                    </section>

                    <Link 
                        to={"/aboutTechnology"} 
                        target="_self"
                    >
                        <p className="title-quiz">Technology</p>

                        <p className="questions-tech">10 Question</p>
                    </Link>
                    <img src={StarIcon} alt="star icon" className="star-icon"></img>
                    <span className="evaluation-note">4.8</span>

                </section>

                <section className="sport-quiz">
                    <section className="ball-img">
                        <img src={SoccerBallIcon} alt="soccer-ball-design"></img>
                    </section>

                    <Link 
                        to={"#"} 
                        target="_self" 
                    >
                        <p className="title-quiz">Sport</p>
                        <p className="questions-sport">
                        10 Question
                        </p>
                    </Link>
                    <img src={StarIcon} alt="star icon" className="star-icon"></img>
                    <span className="evaluation-note">4.8</span>
                    
                </section>

                <section className="music-quiz">
                    <section className="music-img">
                        <img src={MusicIcon} alt="music-note-design"></img>
                    </section>

                    <Link 
                        to={"#"} 
                        target="_self"
                    >
                        <p className="title-quiz">Music</p>
                        <p className="questions-music">
                        10 Question
                        </p>
                    </Link>
                    <img src={StarIcon} alt="star icon" className="star-icon"></img>
                    <span className="evaluation-note">4.8</span>

                </section>
 
            </section>
        
        </>
        
    )
}