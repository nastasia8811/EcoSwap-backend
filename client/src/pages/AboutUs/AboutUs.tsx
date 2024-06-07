import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Container, Box } from '@mui/material';
// @ts-ignore
import swap from "./img/swap.jpg";
import './AboutUs.scss'

const AboutUs = () => {
    return (

            <Container className="about" maxWidth="xl">
            <img className="about__img" src={swap} alt='nature'/>
                <Box className="about__container">
            <BreadCrumbs linksArray={[{link: '/about', text: 'About us'}]}/>
            <h1>EcoSwap: Uniting for Environmental Protection</h1>
            <p>EcoSwap is a unique platform that brings people together to organize and participate in events aimed at
                protecting the environment. We believe that everyone can contribute to nature conservation, and our
                mission is to provide convenient tools and a space for eco-conscious initiatives.</p>
            <h2>What We Offer</h2>
            <p><h3>Participate in Events:</h3> On our platform, users can browse and choose events that match their
                interests and priorities. Whether it's tree planting, beach cleanups, or educational seminars on
                sustainable development, EcoSwap offers a wide range of events where everyone can find something they
                are passionate about.
            </p>
            <p><h3>Create Your Own Events:</h3> In addition to participating, EcoSwap allows users to create their own
                events. From small local actions to large environmental campaigns, we provide all the necessary tools
                for organizing and promoting your event, attracting like-minded individuals, and making a positive
                impact.
            </p>
            <h2>Our Values</h2>
            <p>Environmental Responsibility: We are committed to fostering a sense of responsibility towards the
                environment and encouraging active participation in ecological initiatives.</p>
            <p>Community and Collaboration: EcoSwap is a platform where people unite to achieve a common goal. We
                believe in the power of collective action and support cooperation and mutual assistance among
                participants.</p>
            <p>Education and Awareness: We believe that education is the key to a sustainable future. Many of our events
                include educational components aimed at raising awareness about important environmental issues.</p>
            <p>Join EcoSwap and become part of the movement for a cleaner and healthier planet! Discover interesting
                events, create your own, and contribute to the preservation of our shared environment. Together, we can
                make a difference!</p>
                </Box>
                </Container>

            )
            };

            export default AboutUs;