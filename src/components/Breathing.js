import React, {useState} from "react";
import './Breathing.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {Container, Row, Col} from 'react-grid-system';


const renderTime1 = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return;
  }

  return (
    <div className="timer">
      <div className="text" style={{fontSize:"30px"}}>Breath IN for 4 seconds</div>
      <div className="value" style={{fontSize:"70px"}} >{remainingTime}</div>
    </div>
  );
};

const renderTime2 = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return;
  }

  return (
    <div className="timer">
      <div className="text" style={{fontSize:"30px"}}>HOLD breath for 8 seconds</div>
      <div className="value" style={{fontSize:"70px"}} >{remainingTime}</div>
    </div>
  );
};

const renderTime3 = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return;
  }

  return (
    <div className="timer">
      <div className="text" style={{fontSize:"30px"}}>Breath OUT for 7 seconds</div>
      <div className="value" style={{fontSize:"70px"}} >{remainingTime}</div>
    </div>
  );
};



const Breathing = () => {

  const [inMotion, setInMotion ] = useState(false);
  const [inMotion2, setInMotion2 ] = useState(false);
  const [inMotion3, setInMotion3 ] = useState(false);

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
           marginTop: '70px',
           justifyContent: "center",
           alignItems: "center",
           textAlign: "center"
         }}>
          <Container fluid>
            <Row direction="row" style={{ marginTop: '100px' }}>
              <Col xs={7} className="text-breathing" align="center" justify="center" text="center">
                <h1>
                Breathing exercise
                <br />
                4-8-7 technique
                </h1>
                <h3><br></br>
                  Great help when experiencing anxiety<br></br><br></br>
                  <u>Breath in</u> for <u>4</u> seconds<br></br>
                  <u>Hold your breath</u> for <u>8</u> seconds<br></br>
                  then <u>breath out</u> for <u>7</u> seconds
                </h3>
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
              </Col>
              <Col xs={5} className="circles" align="center" justify="center" text="center">
                <div className="breath-in" style={{ opacity: hideTimer1 ? 1 : 0}}>
                  <CountdownCircleTimer
                    isPlaying={inMotion}
                    duration={4}
                    size={400}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => displayTimers(1)}
                  >
                    {renderTime1}
                  </CountdownCircleTimer>
                </div>
                <div className="hold-breath" style={{ opacity: hideTimer2 ? 1 : 0 }}>
                  <CountdownCircleTimer
                    isPlaying={inMotion2}
                    duration={8}
                    size={400}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => displayTimers(2)}
                  >
                    {renderTime2}
                  </CountdownCircleTimer>
                </div>
                <div className="breath-out" style={{ opacity: hideTimer3 ? 1 : 0}}>
                  <CountdownCircleTimer
                    isPlaying={inMotion3}
                    duration={7}
                    size={400}
                    colors={[
                      ['#004777', 0.33],
                      ['#006aff', 0.33],
                      ['#5ea1ff', 0.33],
                    ]}
                    onComplete={() => displayTimers(3)}
                  >
                    {renderTime3}
                  </CountdownCircleTimer>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}


export default Breathing;
