

export interface EventItemProps {
  id: string;
  title: string;
  img: string;
  date: string;

}
const EventItem: React.FC<EventItemProps>  = ({id, title, img, date}) =>  {

  return (
<div className="item-wrapper">{id}
  <div className="item-wrapper__img">{img}
    <div className="item-wrapper__img-date">{date}</div></div>
  <div className="item-wrapper__title">{title}</div>
</div>
  );
}
 export default EventItem;