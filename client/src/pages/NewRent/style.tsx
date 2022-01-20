import styled from 'styled-components';

export const NewRentArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(10deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.9528186274509804) 0%, rgba(0,212,255,1) 100%);
  border-radius: 30px;
  color: #f1f1f1;
  padding: 30px 50px;
  margin-top: 20px;
 
`;

export const EquipmentArea = styled.div`
  margin-top: -100px;
  margin-left: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #f1f1f1;

  .equipment-img{
  width: 150px;
  height: 220px;
  border-radius: 20px;
  box-shadow: 0px 0px 3px #888;
}
.equipment-area--text{
  max-width: 150px;
  margin-top: 50px;
  font-weight: bold;
  text-shadow: 1px 1px 0px #262626;
  span{
    color: rgb(255, 102, 0);
  }
}

`;