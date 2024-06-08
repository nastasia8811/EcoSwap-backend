import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {Box, Container,Button} from '@mui/material';
import './Events.scss';
//import EventItem from "src/components/EventItem/EventItem";
import React, {useEffect} from 'react';
import EventCreate from '../EventCreate/EventCreate';
import  {useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
// @ts-ignore
import events from "./img/events.jpg";
import axios from "axios";
import {useSelector} from "react-redux";
import {GET_EVENTS} from "../../endpoints";
import EventItem from "../../components/EventItem/EventItem";
//import EventPage from "../EventPage/EventPage";
//import {selectorLoginToken} from "../../selectors";
//import { createTheme } from '@mui/material/styles';
//import {lightGreen} from '@mui/material/colors';


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
    const [eventsData, setEventsData] = useState([]);
    const navigate = useNavigate();
    //const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const toggleModalAuth = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsModalAuthOpen(!isModalAuthOpen);
    };
    const closeModalCreateEvent = () => {
        setIsModalAuthOpen(false);
    }

    const handleEventClick = (id: number) => {
        navigate(`/event/${id}`);
    };
    // @ts-ignore
    const userData = useSelector((state)=>state.login.userData)

    useEffect(() =>{
        if (!userData){
            navigate('/authorization');
        } else {
            axios.get(GET_EVENTS)
                .then((response) => {
                    setEventsData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching events:', error);
                });
        }
    }, []);

    return(
        <>
         <Container className="events-container" maxWidth="xl">
             <img className="events-container__img" src={events} alt='nature'/>

                <div className="events-container__wrapper">
                    <BreadCrumbs linksArray={[{ link:'/events', text: 'Events' }]} />
                    <h2 className="events-container__wrapper-title">Events</h2>
                    <div className="events-container__wrapper-plus">
                        <Button className="events-container__wrapper-plus-button" variant="outlined" onClick={(event) => toggleModalAuth(event)}>Add Event</Button>
                        <Button className="events-container__wrapper-plus-button" variant="outlined" onClick={(event) => toggleModalAuth(event)}><Link to="/account">My Account</Link></Button>
                        {isModalAuthOpen && <EventCreate closeModalCreateEvent={()=>closeModalCreateEvent()} />}
                    </div>
                    <Box className="events-container__wrapper-flex">
                    {eventsData.map((item:any) => (
                         <EventItem key={item.id} id={item.id} title={item.title} img={item.img} onClick={() => handleEventClick(item.id)}  />
      ))}
                    </Box>

                </div>
            </Container>
        </>
    )}
;

export default Events;