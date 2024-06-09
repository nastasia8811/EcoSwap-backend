import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
//import { eventsList } from "../../pages/Events/eventlist";
import EventItem from "../EventItem/EventItem";
import './ImageCarousel.scss'
import {EventData} from "../../reducers/event.reducer";
import axios from "axios";
import {GET_EVENTS} from "../../endpoints";

const ImageCarousel: React.FC = () => {
    const [eventsData, setEventsData] = useState([]);
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    useEffect(()=>{
        axios.get(GET_EVENTS)
            .then((response) => {
                setEventsData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching events:', error);
            });
    },[])

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

    return (
        <Box  sx={{ maxWidth: 1100, margin: 'auto', mt: 4 }}>
            <Slider className="carousel" {...settings}>
                {eventsData.map((item: EventData) => (
                    <EventItem key={item._id} event={item} />
                ))}
            </Slider>
        </Box>
    );
}

export default ImageCarousel;
