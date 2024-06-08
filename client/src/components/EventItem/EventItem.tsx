import React from 'react';
import './EventItem.scss';

interface EventItemProps {
  id: number;
  title: string;
  img: string;
  // date: string;
  onClick?: () => void;
}
const EventItem: React.FC<EventItemProps>  = ({title, img, id,onClick}) =>  {

  return (

<div className="item-wrapper" onClick={onClick}>
  <img className="item-wrapper__img" key={id} src={img} alt={title} />
  <h2 className="item-wrapper__title" key={id}>{title}</h2>


</div>

  );
}
 export default EventItem;
