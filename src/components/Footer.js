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
        <h6>
        <a   classsName="linked-in-button" id="alex-linked-in"href="https://www.linkedin.com/in/alex1rodriguez">Alex Rodriguez LinkedIn</a>
        </h6>
        </div>
    );
}
   

export default Footer;
