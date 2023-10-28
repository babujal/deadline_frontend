import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <div className='d-flex justify-content-around topNav'>
            <img src='/NewLogoLeakSpil.png' width="80" height="80" alt='Logo'></img>
            <Link to={'/create'}><img src='/AddPng.png' width="80" height="80" alt="App Logo"/></Link>
            <div className="navbar-brand">
            <img src='/legend.png' width="95" height="80" alt='Legend'/>
            </div>
        </div>
    )
}
  
export default Header

// width="20vw"