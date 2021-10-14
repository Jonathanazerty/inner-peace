import React from "react";
import './Guidance.css';
import { Container, Row, Col } from 'react-grid-system';
import { useHistory } from 'react-router-dom';

const Guidance = () => {

  let history = useHistory();

  const Help = () => {
    history.push('/Help')
  }

  const Breathing = () => {
    history.push('/Breathing')
  }
    
    return (
        
      <div className='guidance-main'>
          <div className='guidance-header'>
            <Container fluid>
              <Row direction="row" style={{ margin: '40px' }} >
                <Col xs={6} align="center" justify="center" text="center">
                  <div>
                      <button onClick={Help} >Find Help</button>
                  </div>
                </Col>
                <Col xs={6} align="center" justify="center" text="center">
                  <div>
                      <button onClick={Breathing} >Breathing</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='guidance-main'>
            <div className="guidance-title" align="center" justify="center" text="center">
              <h1>Guidance</h1>
            </div>
            <div className="guidance-content">



            <Container fluid>
              <Row direction="row" style={{ margin: '70px' }} >
                <Col xs={4} md={4} align="center" justify="center" text="center">
                  <div>
                    <b>Relax</b>
                  </div>
                  <p> Read a book</p>
                  <p> Meditate</p>
                </Col>
                <Col direction="column" xs={4} align="center" justify="center" text="center">
                  <div>
                    <b>Picture</b>
                  </div>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    <b>Exercise</b>
                  </div>
                  <p> Helps you mentally as well as physically</p>
                  <p> Helps you feel good and maintain your health</p>
                </Col>
              </Row>
              <Row direction="row" style={{ margin: '40px' }} >
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    <b>Positive attitude</b>
                  </div>
                  <p> Replace negative thoughts with positive ones</p>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    <b>Picture</b>
                  </div>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    <b>Eat and drink</b>
                  </div>
                  <p> Eat healthy and drink a lot of water</p>
                  <p> Try not to drink coffee and alcohol</p>
                </Col>
              </Row>
              <Row direction="row" style={{ margin: '40px' }} >
              <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    <b>Sleep</b>
                  </div>
                  <p> Your body needs additional sleep and rest</p>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    <b>Picture</b>
                  </div>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    <b>Professional help</b>
                  </div>
                  <p> Don't be worried or afraid to talk to a physician or therapist</p>
                </Col>
              </Row>
            </Container>
            </div>
          </div>
      </div>
    )
}


export default Guidance;