import { Header } from "../../components/Header";

import "../../styles/progress-bar/style.css";

import { Stack, CircularProgress } from "@mui/material";


export const Home = () => {
    return (
        <>
            <Header />
            <section className="progress-bar">
                <Stack spacing={2} direction="row">
                    <CircularProgress variant="determinate" value={75} />
                </Stack>
                <section className="result-bar">
                    <h4>Good Result!</h4>
                    <p>Share your achievement with your friend</p>
                </section>
            </section>
        
        </>
        
    )
}