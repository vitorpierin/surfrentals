import axios from 'axios';

 const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json' 
  }
});


 
    

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
export default api;