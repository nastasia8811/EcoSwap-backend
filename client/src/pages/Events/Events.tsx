import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Box, Container,} from '@mui/material';
import './Events.scss';
import EventItem from "src/components/EventItem/EventItem";
import { eventsList } from "./eventlist";
//import React, {useEffect} from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EventCreate from '../EventCreate/EventCreate';
import {useState} from 'react'
//import { useSelector} from "react-redux";
// import {ThunkDispatch} from "redux-thunk";
// import {Action} from "redux";
//import {selectorLoginToken} from "../../selectors";
//import {useNavigate} from "react-router-dom";

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
    //const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const toggleModalAuth = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsModalAuthOpen(!isModalAuthOpen);
    };
    const closeModalCreateEvent = () => {
        setIsModalAuthOpen(false);
    }
    // const token = useSelector(selectorLoginToken);
    // const navigate=useNavigate();

    // useEffect(() =>{
    //    if (!token){
    //        navigate('/authorization');
    //    } else {
    //        fetch('http://localhost:5000/api/event')
    //            .then((res)=>res.json())
    //            .then((data)=>console.log(data))
    //
    //        const token = localStorage.getItem("token")
    //
    //        fetch('http://localhost:5000/api/event',{method: 'POST',
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
    //        fetch('http://localhost:5000/api/event/id',{method: 'DELETE',
    //            // @ts-ignore
    //            headers: {
    //                'Content-Type': 'application/json;charset=utf-8',
    //                'Authorization':token,
    //            },
    //            body: JSON.stringify({})})
    //            .then((res)=>res.json())
    //            .then((data)=>console.log(data))
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
    //    }
    //
    //         }, []);

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