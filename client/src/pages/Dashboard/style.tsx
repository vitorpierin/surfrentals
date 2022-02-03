import styled from 'styled-components';

export const TableArea = styled.div`

  h2{
    text-align: center;
    color: #333;
    text-shadow: 1px 1px 1px #555;
    letter-spacing: 8px;
    font-weight: 100;
    
  }
  table{
    
    
  }
  td{
    align-self: center;
    text-align:center;
    color: #666; 
    font-size: 12px; 
    font-weight: bold;
  }
  tr{
    text-align:center;
    color: #f1f1f1;
   
  }


  th{
    color: #333;
    text-align:center;
    font-size: 14px;
}
  .paid{
    color: darkgreen;
    font-weight:bold;
    text-shadow: 1px 1px 1px #999;
    font-size: 20px;
  }
  .notpaid{
    color: red;
    font-weight:bold;
    text-shadow: 1px 1px 1px #999;
    font-size: 16px;
  }
  .btn-info{
   border:none;
   background-color: transparent;
   color:rgb(255, 102, 0);
   font-weight:bold;
   width:50px;
  }
  .finalizado-area{
    color: #999;
  }
  .open-area{
    color: darkgreen;
  }
  .btn-delete{
    color: red;
    border: none;
    background-color: transparent;
    font-weight: bold;
  }
`;
export const BtnModalClose = styled.button`

`;