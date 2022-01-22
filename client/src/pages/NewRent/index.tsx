import * as C from './style';
import React from 'react';
import {api}  from '../../api';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import RentForm from '../../components/partials/RentForm';

const NewRent = () => {
 /* const equipment = useParams();
  const [id, setId]: any =useState(JSON.stringify(equipment.id)) as any;*/
  const board = useAppSelector(state => state.surfboard);

  const handleAddRent = async (name: string,
    address: string,
    equipment: number,
    date_start: string,
    date_end: string,
    document: string,
    paid: boolean) => {
    console.log(name, address);
    try {
      let json = await api.addNewRent(name, address, equipment, date_start, date_end, document, paid);
      console.log(json)
      if(json.name) {
        alert("Rent adicionado com sucesso!");
    }
    } catch (error) {
      console.log(error);
    }
  }
    
 return(
  <C.NewRentArea>
    <RentForm onAdd={handleAddRent}/>
    <C.EquipmentArea>
      <div className="equipment-area--img">
          <img className="equipment-img" alt='surfboard'src={`http://localhost:4000/images/${board.image}`}/>
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