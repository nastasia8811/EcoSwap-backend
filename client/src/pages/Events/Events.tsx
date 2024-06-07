import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {Box, Container,Button} from '@mui/material';
import './Events.scss';
import EventItem from "src/components/EventItem/EventItem";
import { eventsList } from "./eventlist";
import React, {useEffect} from 'react';
//, {useEffect}

import EventCreate from '../EventCreate/EventCreate';
import  {useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
// @ts-ignore
import events from "./img/events.jpg";
import { useSelector} from "react-redux";

//import {ThunkDispatch} from "redux-thunk";
//import {Action} from "redux";
import {selectorLoginToken} from "../../selectors";
//import axios from 'axios'


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

    const token = useSelector(selectorLoginToken);
    const navigate=useNavigate();

    // @ts-ignore
    const userData = useSelector((state)=>state.login.userData)

    useEffect(() =>{
       if (!token){
           navigate('/authorization');
       } else {
    //        fetch('http://localhost:5000/api/event')
    //            .then((res)=>res.json())
    //            .then((data)=>console.log(data))
    //
    //        const token = localStorage.getItem("token")
    //
    //        axios.post('http://localhost:5000/api/event',{{
    //                title: "Концерт гурту Океан Ельзи",
    //                date: new Date("2024-07-15T19:30:00"),
    //                img: "https://example.com/concert_poster.jpg",
    //                city: "Київ",
    //                description: "Концерт до 30-річчя гурту",
    //                location: "НСК Олімпійський",
    //                available: 5000,
    //                bookedSeats: [], // Поки що немає заброньованих місць
    //                customer_id: "648f0e547c8768e698234567" // Приклад ID користувача з моделі Customer
    //            };})
    //            .then((res)=>console.log(res))
    //            .then((data)=>console.log(data))
    //
           //axios.delete('http://localhost:5000/api/event/666364902271f36b6e0e9a5c')

    //
    //        fetch('http://localhost:5000/api/event/id',{method: 'PUT',
    //
    //            // @ts-ignore
    //            headers: {
    //                'Content-Type': 'application/json;charset=utf-8',
    //                'Authorization':token,
    //            },
    //            body: JSON.stringify({})})
    //            .then((res)=>res.json())
    //            .then((data)=>console.log(data))
    //
    //        fetch('http://localhost:5000/api/event/id',{method: 'GET',
    //
    //            // @ts-ignore
    //            headers: {
    //                'Content-Type': 'application/json;charset=utf-8',
    //                'Authorization':token,
    //            },
    //            body: JSON.stringify({})})
    //            .then((res)=>res.json())
    //            .then((data)=>console.log(data))
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
                        {/*<ToggleButton value="android" onClick={(event) => toggleModalAuth(event)}>Add Event</ToggleButton>*/}
                        {/*<Fab  size="small" color="primary"*/}
                        {/*     aria-label="add" onClick={(event) => toggleModalAuth(event)}>*/}
                        {/*    <AddIcon />*/}

                        {/*</Fab>*/}
                        {isModalAuthOpen && <EventCreate closeModalCreateEvent={()=>closeModalCreateEvent()} />}
                    </div>
                    <Box className="events-container__wrapper-flex">
                    {eventsList.map((item:any) => (
                         <EventItem key={item.id} id={item.id} title={item.title} img={item.img} onClick={() => handleEventClick(item.id)}  />
      ))}
                  
                    </Box>

                </div>
            </Container>
        </>
    )}
;

export default Events;