import React, { useState, useEffect } from 'react';
import * as C from './style';
import { Rent } from '../../types/Rent';
import {api}  from '../../api';
import "bootstrap-icons/font/bootstrap-icons.css";
import Modal from '../../components/partials/Modal';

 const Dashboard = () => {
  const [rentals, setRentals] = useState<Rent[]>([]);
  const [modalVisible, setModalVisible] = useState(false); 

   useEffect(()=>{
    handleAllRentals();
  }, [])

  const handleAllRentals = async () => {
    try {
      let json = await api.getAllRentals();
      console.log(json.rentals);
      setRentals(json.rentals);
      
    } catch (error) {
      console.log(error);
    }
  }
 
  const handleModal = () => {
    setModalVisible(true);
  }


  console.log(rentals);
  return(
    <>
      <div className="container">
        <h2>Rentals</h2>
        <C.TableArea >
          
          <table  className='table'>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Document</th>
              <th scope="col">Date Start</th>
              <th scope="col">Date End</th>
              <th scope="col">Total $</th>
              <th scope="col">Paid</th>
              <th scope="col">Equipment</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {rentals && rentals.map((item, index) => (
           
            <tbody key={index}>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td className="name">{item.name}</td>
                  <td className="address">{item.address}</td>
                  <td>{item.document}</td>
                  <td className="item-number">{item.date_start}</td>
                  <td className="item-number">{item.date_end}</td>
                  <td className="item-number"/*style="text-align:center;"*/>{item.total_price}</td>
                  {item.paid ? <td  className="bi bi-check-lg paid" ></td>
                  : <td  className= "bi bi-x-lg notpaid" ></td>}

                  
                  <td id="equipment"  /*style="text-align:center;"*/>{item.equipment}</td>
                
                  <td><button className="btn-info" onClick={handleModal} /*style="color:white; border: none; background-color: transparent;"*/>+ info</button></td>
                  {item.finalizado ?  <td>Rental Closed</td> : '' }
                 
                
                </tr>
                
            </tbody>
            
          ))}
          </table>
        </C.TableArea >
      </div>
      {modalVisible ? 
      <> 
        <Modal visible={modalVisible} setVisible={setModalVisible}/> 
       
        
      </>
      : ''}
     
    </>
  );
}

export default Dashboard;