import React from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Container } from '@mui/material';
import { eventsList } from '../Events/eventlist';
interface EventPageProps {
    id?: any;
    title?: string;
    img?: string;
    date?: string;
    city?: string;
    description?:string;
    available?:number;
    onClick?: () => void;
}
const EventPage: React.FC<EventPageProps> = () => {
    const { id } = useParams<{ id: string }>();
    const event = eventsList.find(event => event.id === parseInt(id || '', 10));

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <>
            <Container className="eventPage" maxWidth="lg">
                <BreadCrumbs linksArray={[{ link: '/events', text: 'Events' }, { link: `/event/${id}`, text: 'Event' }]} />
                <div className="eventPage__container">
                    <h2 className="eventPage__container-title">{event.title}</h2>
                    <div className="eventPage__container-date">{event.date}</div>
                    <div className="eventPage__container-available">{event.available}</div>
                    <h4 className="eventPage__container-city">{event.city}</h4>
                    <img src={event.img} alt={event.title} />
                    <p className="eventPage__container-description">{event.description}</p>
                </div>
            </Container>
        </>
    );
};

export default EventPage;
