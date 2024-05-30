import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Box, Container } from '@mui/material';
import './Events.scss';
import EventItem from "src/components/EventItem/EventItem";
import { eventsList } from "./eventlist";

    

const Events:React.FC = () => {

    return(
        <>
         <Container className="events-container" maxWidth="lg">
            <BreadCrumbs linksArray={[{ link:'/events', text: 'Events' }]} />
                <div className="events-container__wrapper">
                    <h2 className="events-container__wrapper-title">Events</h2>
                    <Box className="events-container__wrapper-flex">
                    {eventsList.map((item:any) => (
                         <EventItem key={item.id} id={item.id} title={item.title} img={item.img} />
      ))}
                  
                    </Box>
                </div>
            </Container>
        </>
    )}
;

export default Events;