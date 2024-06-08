import React from 'react';
import './EventItem.scss';
import IconButton from '@mui/material/IconButton';
//import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
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
  <div className="item-wrapper-buttons">

  </div>
  <img className="item-wrapper__img" key={id} src={img} alt={title} />
  <h2 className="item-wrapper__title" key={id}>{title} <IconButton aria-label="delete" color="primary">
    <DeleteOutlineOutlinedIcon />
  </IconButton>
    <IconButton aria-label="edit" color="primary">
      <EditOutlinedIcon />
    </IconButton>
    <IconButton aria-label="delete" color="primary" >
      <StarBorderOutlinedIcon />
    </IconButton>
  </h2>


</div>

  );
}
 export default EventItem;
