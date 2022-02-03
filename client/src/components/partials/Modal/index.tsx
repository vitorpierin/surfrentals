import * as C from './styled';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../../api';
import { Rent } from '../../../types/Rent';
import { Surfboard } from '../../../types/Surfboard';

type Props = {
    visible:boolean,
    setVisible:React.Dispatch<React.SetStateAction<any>>,
    id: string,
    equipment: string,
    onAdd: (
      paid:any,
      finalizado:any
    ) => void;
}
const Modal = (props: Props) => {
  const [rent, setRent] = useState<Rent>();
  const [paid, setPaid] =useState(rent?.paid);
  const [finalizado, setFinalizado] =useState(rent?.finalizado);
  const [id, setId] =useState(props.id);


  const [surfboard, setSurfboard] =useState<Surfboard>();
  console.log('--------------------');
  console.log(paid);
  console.log(finalizado);
  console.log('--------------------');

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
  const handlePaidChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newpaid = e.target.checked;
    console.log(newpaid);
    console.log(`id number: ${props.id}`)
    setPaid(newpaid);
   
    
    console.log(paid);
  }

  const handleFinalizadoChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newfinalizado = e.target.checked;
    setFinalizado(newfinalizado);
    console.log(finalizado);
  }
  const handleConfirmClick = () => {
    
    if(paid || finalizado){
      
      props.onAdd(paid, finalizado)
    }else{
      alert('Nenhum alteração para fazer')
    }
   /**/
  }

  return(
    <>
      {props.visible ? 
      <C.ModalBackground>
      <C.ModalArea>
       <C.InfoArea> 
        <C.InfoAreaRent>
          {rent?.finalizado ? <h3 style={{color:"red"}}> Rent #{rent?.id} </h3> : <h3 style={{color:"darkgreen"}}> Rent #{rent?.id} </h3> }
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
            {rent?.paid ? <span style={{color:"green"}}>paid</span> : <input className="custom-control-input" style={{marginLeft:"8px"}} onChange={handlePaidChange} id="paid" name="paid" type="checkbox"/>}
          </div>  
          {rent?.finalizado ? 
          '' : 
          <div className="item-rent">
            <label>Close Rent: </label>
            <input className="custom-control-input" style={{marginLeft:"8px"}} onChange={handleFinalizadoChange} id="finalizado" name="finalizado" type="checkbox"/>
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
          {rent?.finalizado ? '' : <C.BtnModalConfirm onClick={handleConfirmClick}>Confirm</C.BtnModalConfirm>}
          <C.BtnModalClose onClick={handleModalClose}>Close</C.BtnModalClose>
        </C.Buttons> 
        
      </C.ModalArea>
    </C.ModalBackground> :
    ''
    }
      
       
    </>
  );
}

export default Modal;