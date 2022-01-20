import * as C from './styled';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';

const RentForm = () => {

  const board = useAppSelector(state => state.surfboard);

  return (
    <>
    <C.Form className="form-input">
      <h2 className="form-title">Customer Info: </h2>
      <label className="rent-label" >Name:</label>
      <C.InputArea className="name" id="customer" name="name" type="text" />       
      <label className="rent-label" >Document:</label>
      <C.InputArea className="document" id="document" name="document" type="file" />
      <label className="rent-label" >Address:</label>
      <C.InputArea className="input-area" id="adress" name="address" type="text" />
      <label className="rent-label" >Equipment: #{board.id}</label>
      <div className="date-area">  
        <div className="date-input"> 
          <label className="rent-label" >Date Start:</label>
          <C.InputArea className="date" id="date-start" name="date_start" type="date" />
        </div>
        <div className="date-input">
          <label className="rent-label" >Date End:</label>
          <C.InputArea className="date" id="date-end" name="date_end" type="date" />
        </div>
      </div>
      <label className="rent-label" >Info:</label>
      <textarea className="info" name="info" id="info"></textarea>
      <input type="submit" className="btn-submit" value="Confirm"/>
  </C.Form>
  </>
  );
}

export default RentForm;