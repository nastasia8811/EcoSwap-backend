
import './EventItem.scss'
export interface EventItemProps {
  id: number;
  title: string;
  img: string;


}
const EventItem: React.FC<EventItemProps>  = ({title, img, id}) =>  {

  return (
<div className="item-wrapper">
  <img className="item-wrapper__img" key={id} src={img} alt={title} />
  <div className="item-wrapper__title" key={id}>{title}</div>
</div>
  );
}
 export default EventItem;