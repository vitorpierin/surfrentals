import styled from 'styled-components';

export const Form = styled.fieldset`
  display: flex;
  flex-direction: column;
  color: #f1f1f1;
  font-weight: bold;
  .form-title{
    font-size: 26px;
    letter-spacing: 3px;
    text-shadow: 1px 1px 1px #262626;
    font-weight: bold;
  }
  .rent-label{
    margin-top: 15px;
    margin-bottom: 2px;
    letter-spacing: 2px;
    font-weight: 600;
    text-shadow: 0px 0px 3px #262626;
  }

  
  .rent-label{
    margin-top: 15px;
    margin-bottom: 2px;
    letter-spacing: 2px;
    font-weight: 600;
    text-shadow: 0px 0px 3px #262626;
  }
}
  .name{
    width:400px;
  }
  .date{
    width:130px;
    
  }
  .date-area{
    display: flex;
  }
  .date-input{
    display: flex;
    flex-direction: column;
    margin-right: 20px;
}
  .document[type=file]::file-selector-button {
    border:none;
    border-radius: 20px;
    border: none;
    color: #fff;
    padding: 3px 10px;
    font-size: 12px;
    background-color: #999999;
}
  .info{
    height: 160px;
    width: 600px;
    border-radius: 30px;
    border: none;
    padding:5px 15px;
    font-size: 12px;
    outline: none;
    box-shadow: 0px 0px 3px #888;
  }
  .btn-submit{
    width: 160px;
    height: 35px;
    margin-left: 220px;
    align-self: center;
    margin-top: 30px;
    background-color: transparent;
    color: #f1f1f1;
    font-weight: bold;
    border-radius: 20px;
    background-color: rgba(0,212,255,0.2);
}
  .input-radio{
    margin-top: 10px;
}
  .radio-label{
    margin-left: 5px;
}
`;

export const InputArea = styled.input`
  width: 600px;
  border-radius: 30px;
  border: none;
  padding:5px 15px;
  font-size: 12px;
  outline: none;
  box-shadow: 0px 0px 3px #888;
`;