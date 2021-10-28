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
  const [inMotion2, setInMotion2 ] = useState(false);
  const [inMotion3, setInMotion3 ] = useState(false);
  const [restart, setRestart] = useState(0);

  const [hideTimer1, setHideTimer1] = useState(true);
  const [hideTimer2, setHideTimer2] = useState(false);
  const [hideTimer3, setHideTimer3] = useState(false);

  const restartExercise = () => {
    window.location.reload();
 }

    const displayTimers = (timer) => {
      switch(timer) {
        case 1:
           setInMotion2(true);
           setHideTimer1(false);
           setHideTimer2(true);
           setHideTimer3(false);
           return;
        case 2:
            setInMotion3(true);
            setHideTimer1(false);
            setHideTimer2(false);
            setHideTimer3(true);
            return;
        case 3:
            setInMotion3(false);
            setHideTimer1(false);
            setHideTimer2(false);
            setHideTimer3(false);
            return;
        default:
          return;
      }
    }


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
                <div className="breath-in" style={{ opacity: hideTimer1 ? 1 : 0 }}>
                  <CountdownCircleTimer
                    key={restart}
                    isPlaying={inMotion}
                    duration={4}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => displayTimers(1)}
                  >
                    {renderTime}
                  </CountdownCircleTimer>
                </div>
                <div className="hold-breath" style={{ opacity: hideTimer2 ? 1 : 0 }}>
                  <CountdownCircleTimer
                    key={restart}
                    isPlaying={inMotion2}
                    duration={8}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => displayTimers(2)}
                  >
                    {renderTime}
                  </CountdownCircleTimer>
                </div>
                <div className="breath-out" style={{ opacity: hideTimer3 ? 1 : 0}}>
                  <CountdownCircleTimer
                    key={restart}
                    isPlaying={inMotion3}
                    duration={7}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => displayTimers(3)}
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
                  <input className="restart" type="submit" value="Restart" onClick={restartExercise} />
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}


export default Breathing;
