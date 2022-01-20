import * as C from './style';
import React from 'react';
import api  from '../../api';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import RentForm from '../../components/partials/RentForm';

const NewRent = () => {
 /* const equipment = useParams();
  const [id, setId]: any =useState(JSON.stringify(equipment.id)) as any;*/
  const board = useAppSelector(state => state.surfboard);

const handleForm = async () => {
  try {
    await api.post('/addnewrent');
  } catch (error) {
    console.log(error);
  }
}
    
 return(
  <C.NewRentArea>
    <RentForm />
    <C.EquipmentArea>
      <div className="equipment-area--img">
          <img className="equipment-img" src={`http://localhost:4000/images/${board.image}`}/>
      </div>
      <div className="equipment-area--text">
        <div className="equipment--id">Surfboard: <span>#{board.id}</span> </div>
        <div className="equipment--brand">Brand: <span>{board.brand}</span> </div>
        <div className="equipment--size">Size: <span>{board.size}</span></div>
        <div className="equipment--info">Info: <span>{board.info}</span></div>
      </div>
    </C.EquipmentArea>
  </C.NewRentArea>
 );
}


export default NewRent;