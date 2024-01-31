import "../assets/css/userfooter.css";
function FooterUser() {
    return ( 
        <>
        <div className="app-container" style={{paddingTop:'30px'}}>
        <div className="contentuser" style={{textAlign:'center',backgroundColor:'#4e5db2',padding:'20px',color:'white'}}>
            <h2>User DashBoard</h2>
            <p>Simple to access the data of the User</p>
        </div>

        <footer className="footer">
            &copy; 2024 Your Website. All rights reserved.
        </footer>
        </div>

        </>
     );
}

export default FooterUser;