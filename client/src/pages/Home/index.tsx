import * as C from './style';
import {useState} from 'react';
import {Surfboard} from '../../types/Surfboard';
import { api } from '../../api';

const  Home = () => {
  const [surfboards, setSurfboards] =useState<Surfboard[]>([]);



  const loadSurfboard = async () => {
    
    try {
      let json = await api.getAllSurfboards() as any;
      setSurfboards(json);
      
      
    } catch (error) {
      console.log(error);
    }
    console.log(surfboards);
  }

  return(
    <C.HomeArea>
      <div className='Container'>
        <div className='title-area'>
          Surfboards Available: {surfboards.length}
          <button onClick={loadSurfboard}>Load Surfboards</button>
        </div>
          <div className="content-area" >
            {surfboards && surfboards.map((item, index) => (
              <div key={index}>
                <div className="surfboard-area"> 
                  <div className="surfboard-image">
                    <img alt="" src={`http://localhost:4000/images/${item.image}`}/>
                  </div>
                  <div className="surfboard-info">
                    <div className="surfboard--id">id: #{item.id}</div>
                    <div className="surfboard--brand">Brand: {item.brand}</div>
                    <div className="surfboard--size">Size: {item.size}</div>
                    <div className="surfboard--size">Size: {item.image}</div>
                    <form method="GET" action="">          
                      <input type="submit" className="btn-rent" value="Rent"/>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </C.HomeArea>
  );
}

export default Home;