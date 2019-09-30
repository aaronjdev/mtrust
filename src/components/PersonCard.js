import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function PersonCard(props) {


    function handleClick(e, p) {
       // e.preventDefault();
        console.log(e);
      }

    return (


<Card style={{ height: '9rem', width: '24rem'}}>
<button href="#" to={} onClick={() => handleClick(props)} style={{padding: 'none', textAlign: 'left', borderColor:'#fff', background: '#fff'}}>

  <Image roundedCircle src={props.person.picture.thumbnail} style={{height:'60px', width:'60px', position: 'absolute',
    left: '10px', top: '40px'}}/>
  <Card.Body style={{padding: '1rem',  paddingLeft: '75px' }}>
    <Card.Title>{props.person.name.first + ' '+ props.person.name.last}</Card.Title>
    <Card.Text>
    {props.person.email}<br />
    {props.person.location.street.number + ' '+ 
                props.person.location.street.name}<br />
  
            {props.person.location.city + ', '+ 
                props.person.location.state + ', '+
                props.person.location.postcode}

    </Card.Text>

  </Card.Body>
  </button>
</Card>






    );
}

export default PersonCard;