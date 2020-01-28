/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer>
            <p className="float-right"><a href="#"><li className="fa fa-arrow-up"></li></a></p>
            <p>
              &copy; {(new Date().getFullYear())} Tattoo Shop, SA. &middot; 
              <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a>
            </p>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;