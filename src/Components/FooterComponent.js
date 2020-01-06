import React from 'react';
import {Link} from 'react-router-dom';
function Footer(props){
    return(
        <div className='footer'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-4 col-offset-1 col-sm-2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='col-7 col-sm-5'>
                        <h5>Our Address</h5>
                        <address style={{fontSize:'80%',margin:'0px',color:'white'}}>
                            House No 15 Bilal Park<br/>
                            Sham Nagar Chouburji Lahore<br/>
                            Pakistan<br/>
                            <i className='fa fa-phone fa-lg'></i>&emsp;+923 432 7313<br/>
                            <i className='fa fa-fax fa-lg'></i>&emsp;+852 8765 4321<br/>
                            <i className="fa fa-envelope fa-lg"></i><a style ={{color:"white"}} href="mailto:ubaidmanzoor987@gmail.com">
                            &emsp;ubaidmanzoor987@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center sci">
                        <div className="text-center">
                        <a rel='noopener noreferrer' className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=100007422855400" target='_blank'><i className="fa fa-facebook"></i></a>
                        <a rel='noopener noreferrer' className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/UbaidUllah-Manzoor" target='_blank'><i className="fa fa-linkedin"></i></a>
                        <a rel='noopener noreferrer' className="btn btn-social-icon btn-twitter" href="http://twitter.com/" target='_blank'><i className="fa fa-twitter" ></i></a>
                        <a style={{backgroundColor:'red',color:'white'}} rel='noopener noreferrer' className="btn btn-social-icon btn-youtube " href="http://youtube.com/" target='_blank'><i className="fa fa-youtube"></i></a>
                        <a rel='noopener noreferrer' style={{color:'white',backgroundColor:'#55ACEE'}}  className="btn btn-social-icon btn-mail" href="mailto:ubaidmanzoor987@gmail.com" target='_blank'><i className="fa fa-envelope-o"></i></a>
                        <a rel='noopener noreferrer' style={{backgroundColor:"#28A745",color:'white'}} className="btn btn-social-icon btn-whatsapp" href="https:\\web.whatsapp.com" target='_blank'><i className="fa fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"15px"}} className="row justify-content-center">             
                    <div className="col-auto">
                        <p style={{color:"white"}}>© Copyright 2019 Restorante de confusion</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;