import axios from 'axios';
import { Rent } from './types/Rent';

 const http = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
  }
});

export const api = {
  addNewRent: async (name: string,
    address: string,
    equipment: number,
    date_start: string,
    date_end: string,
    document: string,
    paid: boolean) => {
      console.log(name, address, equipment, date_start, date_end, document, paid);
      try {
        let response = await http.post('/addnewrent', {
          name,
          address,
          equipment,
          date_start,
          date_end,
          document,
          paid
        });
      
        return response.data;
      } catch (error) {
          console.log(error);
      }
    

  },
  getAllSurfboards: async () => {
    let response = await http.get('/surfboards');
    console.log(response.data);
    return response.data;
  },
  getAllRentals: async () => {
    try {
      let response = await http.get('/rentals');
      /*let json = Object.entries(response.data);
      let json2 = json[0];*/
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
   
  },
  getRent: async (id: any) => {
    try {
      let response = await http.get(`/rental/${id}`)
      console.log(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getSurfboard: async (id: any) => {
    try {
      let response = await http.get(`/surfboards/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  updateRent: async (id:string, paid: any, finalizado:any) => {
  
    try {
      console.log(paid, finalizado);
      console.log(`ID:${id}`);
      console.log(paid);
      console.log(finalizado);
      let response = await http.put(`/rental/${id}`, {
       paid,
       finalizado 
      });
      console.log(`Response data${response.data}`);
      return response.data;
    } catch (error) {
      console.log('nao deu certo');
      console.log(error);
    }
  },
  deleteRent: async (id: string) => {
    try {
      console.log(`ESSA É A ID: ${id} `)
      let response = await http.delete(`/rental/${id}`);
      return response.data;  
    } catch (error) {
        console.log(error); 
    }
  }
}



 
    

    /*try {
      let response = await axios.get('localhost:4000/surfboards');
      let resposta = response.data;
      console.log(resposta +  response.status + response.headers)
      return resposta;   
    } catch (error) {
      console.log(error)
    }*/
    
    /*let response = await fetch('http://localhost:4000/rentals/');
    let json = await response.json();
    return json;*/


