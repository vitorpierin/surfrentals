import styled from 'styled-components';

export const HomeArea = styled.div`
  .content-area{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    margin: 30px auto;
  }
  .surfboard-area{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .surfboard-image{
    img{
      object-fit: fill;
      width: 150px;
      height: 200px;
      border-radius: 5px;
    }
  }
  .surfboard-info{
    min-width: 180px;
    display: flex;
    flex-direction: column;
    /*background-color: hsl(197, 83%, 47%, 0.4);*/
    padding: 30px;
    border-radius: 30px;
    color: #666;
    margin-left: 10px;
  }
  .btn-rent{
    border: none;
    background:linear-gradient(10deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.9528186274509804) 0%, rgba(0,212,255,1) 100%);
    margin-top: 15px;
    border-radius: 10px;
    letter-spacing: 4px;
    box-shadow: 1px 1px 2px #666;
    font-weight: 600;
    color: #fff;
    padding:5px 10px;
}
`;