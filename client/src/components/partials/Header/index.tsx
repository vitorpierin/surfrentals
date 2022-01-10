import * as C from './styled'

const Header = () => {
  return (
    <C.HeaderArea>
      <div className=" container ">
        <div className="logo"><a href='/'>Rent & Surf</a></div>
        <div className="management">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </C.HeaderArea>
  );
}

export default Header;