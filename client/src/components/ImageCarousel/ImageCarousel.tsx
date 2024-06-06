import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
import { eventsList } from "../../pages/Events/eventlist";
import EventItem from "../EventItem/EventItem";
import './ImageCarousel.scss'
interface EventItemProps {
    id: number;
    title: string;
    img: string;
}

const ImageCarousel: React.FC = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

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
                {eventsList.map((item: EventItemProps) => (
                    <EventItem key={item.id} id={item.id} title={item.title} img={item.img} />
                ))}
            </Slider>
        </Box>
    );
}

export default ImageCarousel;
