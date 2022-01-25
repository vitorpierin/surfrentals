import styled from 'styled-components';

export const TableArea = styled.div`
  background: linear-gradient(10deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.9528186274509804) 0%, rgba(0,212,255,1) 100%);
  border-radius: 20px;
  h2{
    text-align: center;
    color: rgb(255, 102, 0);
    text-shadow: 1px 1px 1px #555;
    letter-spacing: 8px;
    font-weight: bold;
    
  }
  table{
    
    
  }
  td{
    text-align:center;
    color: #f1f1f1; 
    font-size: 12px; 
    text-shadow: 1px 1px 1px #999;
  
  }
  tr{
    text-align:center;
    color: #f1f1f1;
    text-shadow: 1px 1px 1px #999;
   
  }


  th{
    color: rgb(255, 102, 0);
    text-shadow: 0px 0px 2px #000;
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
   color:#fff;
   font-weight:bold;
   width:50px;
  }
`;
export const BtnModalClose = styled.button`

`;