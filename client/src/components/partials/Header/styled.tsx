import styled from 'styled-components';

export const HeaderArea = styled.div`
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo{
    
    a{
      font-size: 35px;
      background:linear-gradient(10deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.9528186274509804) 0%, rgba(0,212,255,1) 100%);
      background-size: 100%;
      background-clip: text;
      color: transparent;
      font-weight: bold; 
      text-decoration: none;
    }
    
  }
  .management{
    cursor:pointer;
  }
  .bar{
    width: 30px;
    height: 2px;
    background-color: rgb(255, 102, 0);
    margin-top: 5px;
    box-shadow: 1px 1px 2px #c3c3c3;
  
}
`;