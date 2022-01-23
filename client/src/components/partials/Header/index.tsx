import * as C from './styled'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <C.HeaderArea>
      <div className=" container ">
        <Link to='/' className="logo"><div>Rent & Surf</div></Link>
        <div className="management">
          <Link to='/dashboard'>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </Link>
        </div>
      </div>
    </C.HeaderArea>
  );
}

export default Header;