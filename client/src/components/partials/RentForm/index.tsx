import * as C from './styled';
import React, { ChangeEvent, useState } from 'react';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import {Link} from 'react-router-dom';


type Props = {
  onAdd: (name: string,
    address: string,
    equipment: number,
    date_start: string,
    date_end: string,
    document: string,
    paid: boolean) => void;
}

const RentForm = ({onAdd}: Props) => {
  const board = useAppSelector(state => state.surfboard);

  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [address, setAddress] = useState('');
  const [equipment, setEquipment] = useState(board.id);
  const [date_start, setDateStart] = useState('');
  const [date_end, setDateEnd] = useState('');
  const [info, setInfo] = useState(board.info);
  const [paid, setPaid] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleDocumentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDocument(e.target.value);
  }
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  }
  const handleDateStartChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateStart(e.target.value);
  }
  const handleDateEndChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateEnd(e.target.value);
  }
  const handleInfoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInfo(e.target.value);
  }
  const handlePaidChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaid(e.target.checked);
  }
 
  const handleConfirmClick =  () => {
    console.log(name, address, paid)
    if( name ){
      onAdd(name, address, equipment, date_start, date_end, document, paid);
    }else{
      alert('Preencha os campos');
    }
    /*const rent: Rent = {
      name:name, 
      address:address,
      document:document, 
      equipment:equipment, 
      date_start:dateStart, 
      date_end:dateEnd, 
      info:info, 
    }
    const json = JSON.stringify(rent);
    console.log(json);
    try {
      let response = await api.post('/addnewrent', {
        json
      });
      console.log(response.data);
      return (response.data);
    } catch (error) {
      console.log(error)
    }
    
  }
  console.log(equipment);*/
  }
  return (
    <>
    <C.Form className="form-input">
      <h2 className="form-title">Customer Info: </h2>
      <label className="rent-label" >Name:</label>
      <C.InputArea className="name" value={name} onChange={handleNameChange} id="customer" name="name" type="text" />       
      <label className="rent-label" >Document:</label>
      <C.InputArea className="document" value={document} onChange={handleDocumentChange} id="document" name="document" type="file" />
      <label className="rent-label" >Address:</label>
      <C.InputArea className="input-area" value={address} onChange={handleAddressChange} id="adress" name="address" type="text" />
      <label className="rent-label" >Equipment: </label>
      <C.InputArea className="input-area" value={`#${equipment}`} id="equipment" name="equipment" type="text" />
      <div className="date-area">  
        <div className="date-input"> 
          <label className="rent-label" >Date Start:</label>
          <C.InputArea className="date" id="date-start" value={date_start} onChange={handleDateStartChange} name="date_start" type="date" />
        </div>
        <div className="date-input">
          <label className="rent-label" >Date End:</label>
          <C.InputArea className="date" id="date-end" value={date_end} onChange={handleDateEndChange} name="date_end" type="date" />
        </div>
      </div>
      <div className="custom-control custom-radio input-radio">
        <input className="custom-control-input" onChange={handlePaidChange} id="paid" name="paid" type="checkbox" checked={paid} />
        <label className="custom-control-label radio-label" >Paid</label>
      </div>
      <label className="rent-label" >Info:</label>
      <textarea className="info" name="info" id="info" value={info} onChange={handleInfoChange}></textarea>
      <Link to='/'><button className="btn-submit" onClick={handleConfirmClick}>Confirm</button></Link>
  </C.Form>
  </>
  );
}

export default RentForm;