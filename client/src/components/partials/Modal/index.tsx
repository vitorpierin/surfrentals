import * as C from './styled';
import React from 'react';

type Props = {
    visible:boolean,
    setVisible:React.Dispatch<React.SetStateAction<any>>;
}
const Modal = (props: Props) => {
  const handleModalClose = () => {
   props.setVisible(false);
  }
  return(
    <>
      {props.visible ? 
      <C.ModalBackground>
      <C.ModalArea>

        ....
        <C.BtnModalClose onClick={handleModalClose}>X</C.BtnModalClose>
      </C.ModalArea>
    </C.ModalBackground> :
    ''
    }
      
       
    </>
  );
}

export default Modal;