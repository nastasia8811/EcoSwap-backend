import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Box, Container } from '@mui/material';
import './Events.scss';
import EventItem from "src/components/EventItem/EventItem";



const Events:React.FC = () => {
    
    return(
        <>
         <Container className="events-container" maxWidth="lg">
            <BreadCrumbs linksArray={[{ link:'/events', text: 'Events' }]} />
                <div className="events-container__wrapper">
                    <h2 className="events-container__wrapper-title">Events</h2>
                    <Box className="events-container__wrapper-grid">
                        <EventItem id="dffd" img="dfdfdfs" title="cfdfd" date="djgjfhjdhf"/>
                    </Box>
                </div>
            </Container>
        </>
    )}
;

export default Events;