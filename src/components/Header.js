import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Header(props) {

    let link;
    if(props.title === "Detail"){
        link = <Link to={"/"} style={{textDecoration: "none", color: '#fff', paddingRight: "5px"}}>&#x2190; </Link>
    }else{
        link = "";
    }
    return (
        <Navbar variant="dark" style={{backgroundColor: '#00ad00'}}>
          {link}
        <Navbar.Brand>{props.title}</Navbar.Brand>
      </Navbar>
    );
}

export default Header;