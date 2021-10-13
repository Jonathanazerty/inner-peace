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
              <Row direction="row" style={{ margin: '70px' }} >
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
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    relax
                  </div>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    picture
                  </div>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    exercise
                  </div>
                </Col>
              </Row>
              <Row direction="row" style={{ margin: '70px' }} >
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    positive attitude
                  </div>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    picture
                  </div>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                  eat and drink
                  </div>
                </Col>
              </Row>
              <Row direction="row" style={{ margin: '70px' }} >
              <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    sleep
                  </div>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    picture
                  </div>
                </Col>
                <Col xs={4} align="center" justify="center" text="center">
                  <div>
                    professional help
                  </div>
                </Col>
              </Row>
            </Container>
            </div>
          </div>
      </div>
    )
}

export default Guidance;