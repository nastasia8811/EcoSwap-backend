import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Box, Container,} from '@mui/material';
import './Events.scss';
import EventItem from "src/components/EventItem/EventItem";
import { eventsList } from "./eventlist";
import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EventCreate from '../EventCreate/EventCreate';
import {useState} from 'react'
// import { createTheme } from '@mui/material/styles';
// import {lightGreen} from '@mui/material/colors';
//
//
// const theme = createTheme({
//     palette: {
//         primary: lightGreen,
//
//     },
// });
// interface EventsProps {
//     closeModalCreateEvent: () => void;
// }
const Events: React.FC = () => {
    const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

    const toggleModalAuth = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsModalAuthOpen(!isModalAuthOpen);
    };
    const closeModalCreateEvent = () => {
        setIsModalAuthOpen(false);
    }
    return(
        <>
         <Container className="events-container" maxWidth="lg">
            <BreadCrumbs linksArray={[{ link:'/events', text: 'Events' }]} />
                <div className="events-container__wrapper">
                    <h2 className="events-container__wrapper-title">Events</h2>
                    <div className="events-container__wrapper-plus">
                        <Fab  size="small" color="primary"
                             aria-label="add" onClick={(event) => toggleModalAuth(event)}>
                            <AddIcon />

                        </Fab>
                        {isModalAuthOpen && <EventCreate closeModalCreateEvent={()=>closeModalCreateEvent()} />}

                    </div>

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