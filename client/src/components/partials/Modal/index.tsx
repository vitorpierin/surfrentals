import * as C from './styled';
import React, { useEffect, useState } from 'react';
import { api } from '../../../api';
import { Rent } from '../../../types/Rent';
import { Surfboard } from '../../../types/Surfboard';


type Props = {
    visible:boolean,
    setVisible:React.Dispatch<React.SetStateAction<any>>,
    id: string,
    equipment: string
}
const Modal = (props: Props) => {
  const [rent, setRent] = useState<Rent>();
  const [equipmentId, setEquipmentId] = useState(rent?.equipment);
  const [surfboard, setSurfboard] =useState<Surfboard>();

  console.log(props.id);
  useEffect(()=>{
    handleRent();
  }, [])

  useEffect(()=>{
    handleSurfboard();
  }, [])

  const handleSurfboard = async () => {
    try {
      let json = await api.getSurfboard(props.equipment);
      console.log(json);
      setSurfboard(json.surfboard);
    } catch (error) {
      console.log(error);
    }
  }
  const handleRent = async () => {
    try {
      let json = await api.getRent(props.id);
      
      
      setRent(json.rent);

    } catch (error) {
      console.log(error);
    }
  }
  const handleModalClose = () => {
   props.setVisible(false);
  }

  const handlePaidChange = () => {

  }

  const handleFinalizado = () => {

  }

  return(
    <>
      {props.visible ? 
      <C.ModalBackground>
      <C.ModalArea>
       <C.InfoArea> 
        <C.InfoAreaRent>
          <h3>Rent #{rent?.id} {rent?.finalizado ? <span> closed</span> : <span> open</span> }</h3>
          <div className="item-rent">
            <label>Name: </label>
            <span>{rent?.name}</span>
          </div>
          <div className="item-rent">
            <label>Document: </label>
            <span>{rent?.document}</span>
          </div>
          <div className="item-rent">
            <label>Address: </label>
            <span>{rent?.address}</span>
          </div>
          <div className="item-rent">
            <label>Date Start: </label>
            <span>{rent?.date_start}</span>
          </div>
          <div className="item-rent">
            <label>Date End: </label>
            <span>{rent?.date_end}</span>
          </div>
          <div className="item-rent">
            <label>Total: </label>
            <span>{`$${rent?.total_price}`}</span>
          </div>
          <div className="item-rent">
            <label>Paid: </label>
            {rent?.paid ? <span>paid</span> : <input className="custom-control-input" onChange={handlePaidChange} id="paid" name="paid" type="checkbox"/>}
          </div>  
          {rent?.finalizado ? 
          '' : 
          <div className="item-rent">
            <label>Close Rent: </label>
            <input className="custom-control-input" onChange={handleFinalizado} id="paid" name="paid" type="checkbox"/>
          </div>}
        
        </C.InfoAreaRent>
        
           
        <C.InfoAreaSurfboard>
          <div className="equipment-area--img">
            <img className="equipment-img" alt='surfboard'src={`http://localhost:4000/images/${surfboard?.image}`}/>
          </div>
          <div className="equipment-area--text">
            <div className="equipment--id">Surfboard <span>#{surfboard?.id}</span> </div>
            <div className="equipment--brand">Brand: <span>{surfboard?.brand}</span> </div>
            <div className="equipment--size">Size: <span>{surfboard?.size}</span></div>
            <div className="equipment--info">Info: <span>{surfboard?.info}</span></div>
          </div>
        </C.InfoAreaSurfboard>
        </C.InfoArea> 
        <C.Buttons>
          {rent?.finalizado ? '' : <C.BtnModalConfirm>Confirm</C.BtnModalConfirm>}
          <C.BtnModalClose onClick={handleModalClose}>Fechar</C.BtnModalClose>
        </C.Buttons> 
        
      </C.ModalArea>
    </C.ModalBackground> :
    ''
    }
      
       
    </>
  );
}

export default Modal;