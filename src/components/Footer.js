const Footer = (props) => {
    //Logout button
    const logout =() => {

//implement logout auth 
    };
    return (
   //Footer 
   <div className="App-footer">
        <h1>
        <a classsName="linked-in-button" id="chris-linked-in" href="https://www.linkedin.com/in/cflo/">Chris's LinkedIn</a>
        <a   classsName="linked-in-button" id="alex-linked-in"href="https://www.linkedin.com/in/alex1rodriguez">Alex's LinkedIn</a>
        <a  classsName="linked-in-button" id="will-linked-in" href="https://www.linkedin.com/in/william-fitzwater-9a401728a/">Will's LinkedIn</a>

        </h1>
        <button className="footer-btn btn btn-primary" onClick={logout}>Logout</button>
        </div>
    );
}
   

export default Footer;
