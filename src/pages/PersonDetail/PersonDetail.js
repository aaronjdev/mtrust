import React, { useState, useEffect } from 'react';
import Header from '../../components/Header.js';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
function PersonDetail(props) {

      const { person } = props.location.state
    return (
        <div>
            <Header title="Detail"></Header>
            <Container>
                <div className="row">
                    <div className="column">
                    <Image src={person.picture.large} style={{padding: '2rem'}}/>
                    </div>
                    <div className="column">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Name</Card.Subtitle>
                            <Card.Text>
                            {person.name.first + ' '+ person.name.last}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Login</Card.Subtitle>
                            <Card.Text>
                            {person.login.password}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Address</Card.Subtitle>
                            <Card.Text>
                            {person.location.street.number + ' '+ 
                person.location.street.name}<br />
  
            {person.location.city + ', '+ 
                person.location.state + ', '+
                person.location.postcode}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Email</Card.Subtitle>
                            <Card.Text>
                            {person.email}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Date of Birth</Card.Subtitle>
                            <Card.Text>
                            {person.dob.date.slice(0,10)}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PersonDetail;