"use client";
import { Container, Row, Col, NavLink, InputGroup, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';

const FooterMenu = () => {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Container fluid id="Footer">
    <Row className="mx-4 py-4">
      <Col>
        <h6>NAVIGATION</h6>
        <hr/>
        <NavLink>about us</NavLink>
        <NavLink>employment</NavLink>
        <NavLink>videos</NavLink>

      </Col>
      <Col>
        <h6>MAIN MENU</h6>
        <hr/>
        <NavLink>Men</NavLink>
        <NavLink>Women</NavLink>
        <NavLink>Kids</NavLink>
      </Col>
      <Col>
        <h6>CONNECT</h6>
        <hr/>
        <p>Sign up for the latest updates</p>
        <InputGroup className="mb-3">
          <Form.Control 
            type="text" 
            placeholder="email@address" 
            value={email} 
            onChange={handleEmailChange} 
          />
          <Button style={{
            backgroundColor: 'black',
            color: 'white',
            borderColor: 'black'
          }}>
            JOIN
          </Button>
        </InputGroup>
      </Col>
    </Row>
  </Container>
  );
};

export default FooterMenu;
