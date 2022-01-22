import * as C from './style';
import React, {useState, useEffect} from 'react';
import {Surfboard} from '../../types/Surfboard';
import {api}  from '../../api';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setId, setBrand, setSize, setAvailable, setImage, setInfo} from '../../redux/reducers/surfboardReducer';



const  Home = () => {
  const dispatch = useDispatch();
  const [surfboards, setSurfboards] =useState<Surfboard[]>([]);
 
 
  useEffect(()=>{
    handleAllSurfboards();
  }, [])
  
  const handleAllSurfboards = async () => {
    try {
      let json = await api.getAllSurfboards();
      setSurfboards(json.list);
    } catch (error) {
      console.log(error);
    }
    
  }
 
  return(
    <>
    <C.HomeArea>
      <div className='Container'>
        <div className='title-area'>
          <h1>Surfboards Available</h1>
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
                    <Link to={`/newrent/${item.id}`}>
                      <button onClick={() => {
                        dispatch(setId(item.id)); 
                        dispatch(setBrand(item.brand)); 
                        dispatch(setSize(item.size)); 
                        dispatch(setAvailable(item.available)); 
                        dispatch(setImage(item.image)); 
                        dispatch(setInfo(item.info))
                        }} className="btn-rent">Rent</button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </C.HomeArea>
    </>
  );
}

export default Home;