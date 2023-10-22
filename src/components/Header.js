import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
      <div className='d-flex justify-content-around topNav'>
        <img src='/Logo.png' width="80" height="80"></img>
        <Link to={'/vehicle'}><img src='/Home.png' width="80" height="80" alt="App Logo"/></Link>
        <a className="navbar-brand">
          <img src='/legend.png' width="95" height="80"/>
        </a>
      </div>
    )
}
  
export default Header