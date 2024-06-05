import {Box, Container, createTheme, Theme, ThemeProvider} from '@mui/material';
import './Hero.scss';


const theme: Theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '1800px', // Set your custom maxWidth value here
                },
            },
        },
    },
});
const Hero = () => {
    return (
        <>
            <Box className="hero">
                <ThemeProvider theme={theme}>
                    <Container maxWidth="xl">
                        <div className="hero__background-top">

                        </div>
                        <div className="hero__content-container">
                            <div className="hero__content-container_text1">
                                We have only
                                one planet
                            </div>
                            <div className="hero__content-container_text2">
                                so let's begin caring for this one today
                            </div>
                        </div>

<div className="hero__background-bottom">
    <div className="hero__background-bottom_container">
        <p className="hero__background-bottom_container-content">Explore a world of environmental protection
            events with EcoSwap! We offer a wide range of gatherings dedicated to ecology, sustainable development,
            and nature conservation. Get inspired, learn, and join the global movement for a greener future right here!</p>
    </div>
</div>
                    </Container>
                </ThemeProvider>
            </Box>
        </>
    )
}

export default Hero;
