



export const api = {
  getAllSurfboards: async () => {
    let response = await fetch('http://localhost:4000/surfboards');
    let json = await response.json();
    let result = Object.entries(json);
    let finalResult = result[0][1];
    console.log(result[0][1]);
    return finalResult;
    

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
  }
}