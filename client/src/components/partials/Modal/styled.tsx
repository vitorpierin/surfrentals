import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index:90;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalArea = styled.div`
  min-height:300px;
  min-width: 700px;
  border-radius:15px;
  box-shadow: 0px 0px 3px #c3c3c3;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  background:linear-gradient(10deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.9528186274509804) 0%, rgba(0,212,255,1) 100%);
  padding: 30px;
  color:#f1f1f1;
  .info{
    display:flex;
    align-items:space-around;
  }
  .items-rent{
    display:flex;
    flex-direction: column;
    padding:5px;
    justify-content: space-between;
    
  }
  .item-rent{
    display:flex;
    align-items: center;
    justify-content: flex-start;
    margin-top:8px;
    label{
      color: #f9f9f9;
      font-weight:bold;
      text-shadow: 1px 1px 1px #262626;
      letter-spacing: 1px;
    }
    span{
      margin-left: 10px;
     
      letter-spacing: 1px;
    }
  }
  .buttons{
   
    
  }
  .equipment-area{
    
  }
  .equipment-img{
    width: 150px;
    height: 220px;
  }
`;

export const InfoArea = styled.div`
  display:flex;
  justify-content: space-between;
`;

export const InfoAreaRent = styled.div`

`;

export const InfoAreaSurfboard = styled.div`

`;
export const Buttons = styled.div`

`;

export const BtnModalClose = styled.button`
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: darkred;
  border: none;
  font-weight: 600;
  color: #fff;
  margin-left: 20px;
`;
export const BtnModalConfirm = styled.button`
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: darkgreen;
  border: none;
  font-weight: 600;
  color: #fff;
`;