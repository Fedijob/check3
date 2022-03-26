import logo from './logo.svg';
import './App.css';
import React from 'react';
import Address from './Component/profile/Adress';
import Name from './Component/profile/Name';
import Image from './Component/profile/Image';
import {Card} from 'react-bootstrap';

function App() {
  return (
    <div  style={{marginTop:"30px",marginLeft:"30%"}}>
 <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src="photo.jpg" />
  <Card.Body>
    <Card.Title><Name/></Card.Title>
    <Card.Text>
      <Address/>
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  );
}

export default App;
