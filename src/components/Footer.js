const Footer = (props) => {
    //Logout button
    const logout =() => {

//implement logout auth
        props.userLogout()
    };
    return (
   //Footer 
        <div className="App-footer">
        <button className="footer-btn btn btn-primary" onClick={logout}>Logout</button>
        </div>
    );
}
   

export default Footer;
