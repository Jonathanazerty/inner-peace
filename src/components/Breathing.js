import React, {useState} from "react";
import './Breathing.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {Container, Row, Col} from 'react-grid-system';


const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Hold breath for 8 seconds</div>;
  }

  return (
    <div className="timer">
      <div className="text">Breath </div>
      <div className="value" style={{fontSize:"xx-large"}} >{remainingTime}</div>
    </div>
  );
};


const Breathing = () => {

  const [inMotion, setInMotion ] = useState(false)


  return (
    <>
  
        <div className="breathing" style={{
           justifyContent: "center",
           alignItems: "center",
           textAlign: "center"
         }}>
          <Container fluid>
            <Row direction="row" style={{ margin: '40px' }} >
              <Col xs={12} align="center" justify="center" text="center">
                <h1>
                Breathing exercise
                <br />
                4-8-7 technique
                </h1>
              </Col>
            </Row>
            <Row direction="row" style={{ margin: '40px' }} >
              <Col xs={4} align="center" justify="center" text="center">
                <div className="breath-in">
                  <CountdownCircleTimer
                    isPlaying={inMotion}
                    duration={4}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => [true, 8000]}
                  >
                    {renderTime}
                  </CountdownCircleTimer>
                </div>
              </Col>
              <Col xs={4} align="center" justify="center" text="center">
                <div className="hold-breath">
                  <CountdownCircleTimer
                    isPlaying={inMotion}
                    duration={8}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => [true, 8000]}
                  >
                    {renderTime}
                  </CountdownCircleTimer>
                </div>
              </Col>
              <Col xs={4} align="center" justify="center" text="center">
                <div className="breath-out">
                  <CountdownCircleTimer
                    isPlaying={inMotion}
                    duration={7}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => [true, 8000]}
                  >
                    {renderTime}
                  </CountdownCircleTimer>
                </div>
              </Col>
            </Row>
            <Row direction="row" style={{ margin: '40px' }} >
              <Col xs={12} align="center" justify="center" text="center">
                <h3 className="info">
                  Reduces anxiety and helps to get tosleep
                </h3>
              </Col>
            </Row>
            <Row direction="row" style={{ margin: '40px' }} >
              <Col xs={12} align="center" justify="center" text="center">
                <div  className="start-breathing">
                    <input type="submit" value="Start exercise" onClick={() => setInMotion(true)} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </>

  );
}


export default Breathing;
