import React, {useState} from "react";
import './Breathing.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {Container, Row, Col} from 'react-grid-system';


const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return;
  }

  return (
    <div className="timer">
      <div className="text">Breath </div>
      <div className="value" style={{fontSize:"xx-large"}} >{remainingTime}</div>
    </div>
  );
};



const Breathing = () => {

  const [inMotion, setInMotion ] = useState(false);
  const [restart, setRestart] = useState(0);

  return (
    <>
  
        <div className="breathing" style={{
           justifyContent: "center",
           alignItems: "center",
           textAlign: "center"
         }}>
          <Container fluid>
            <Row direction="row" style={{ marginTop: '40px' }} >
              <Col xs={12} align="center" justify="center" text="center">
                <h1>
                Breathing exercise
                <br />
                4-8-7 technique
                </h1>
              </Col>
            </Row>
            <Row direction="row" style={{ margin: '70px' }} >
              <Col xs={12} align="center" justify="center" text="center">
                <div className="breath-in" style={{ transition: "all 4s ease-in-out" , transform: "scale(1.2)" }}>
                  <CountdownCircleTimer
                    key={restart}
                    isPlaying={inMotion}
                    duration={4}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => [true, 0]}
                  >
                    {renderTime}
                  </CountdownCircleTimer>
                </div>
              </Col>
            </Row>
            <Row direction="row" style={{ margin: '50px' }} >
              <Col xs={12} align="center" justify="center" text="center">
                <h3 className="info">
                  Reduces anxiety and helps to get to sleep
                </h3>
              </Col>
            </Row>
            <Row direction="row" style={{ margin: '50px' }} >
              <Col xs={6} align="right" justify="center" text="center">
                  <input className="start-breathing" type="submit" value="Start" onClick={() => setInMotion(true)} />
              </Col>
              <Col xs={6} align="left" justify="center" text="center">
                  <input className="restart" type="submit" value="Restart" onClick={() => setRestart(prevRestart => prevRestart + 1)} />
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}


export default Breathing;
