import React, {useState} from "react";
import './Breathing.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {Container, Row, Col} from 'react-grid-system';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


const renderTime1 = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return;
  }

  return (
    <div className="timer">
      <div className="text" >Breath IN for 4 seconds</div>
      <div className="value" >{remainingTime}</div>
    </div>
  );
};

const renderTime2 = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return;
  }

  return (
    <div className="timer">
      <div className="text" >HOLD breath for 8 seconds</div>
      <div className="value" >{remainingTime}</div>
    </div>
  );
};

const renderTime3 = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return;
  }

  return (
    <div className="timer">
      <div className="text" >Breath OUT for 7 seconds</div>
      <div className="value" >{remainingTime}</div>
    </div>
  );
};



const Breathing = (props) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1400px)' })
  const isTabletOrMobile2 = useMediaQuery({ query: '(max-width: 1200px)' })
  

  let history = useHistory();

  const Grounding = () => {
    history.push('/Grounding')
  }

  const Help = () => {
    history.push('/Help')
  }

  const Guidance = () => {
    history.push('/Guidance')
  }

  const [inMotion, setInMotion ] = useState(false);
  const [inMotion2, setInMotion2 ] = useState(false);
  const [inMotion3, setInMotion3 ] = useState(false);

  const [hideTimer1, setHideTimer1] = useState(true);
  const [hideTimer2, setHideTimer2] = useState(false);
  const [hideTimer3, setHideTimer3] = useState(false);

  const [scaleTimer1, setScaleTimer1] = useState(true);
  const [scaleTimer3, setScaleTimer3] = useState(true);

  const restartExercise = () => {
    window.location.reload();
 }

    const displayTimers = (timer) => {
      switch(timer) {
        case 1:
           setInMotion2(true);
           setScaleTimer1(false);
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
            setScaleTimer3(false);
            return;
        default:
          return;
      }
    }


  return (
    <>
      <div className='breathing-header'>
        <Container fluid>
          <Row direction="row" style={{ margin: '10px' }} >
            <Col xs={4} align="center" justify="center" text="center">
              <div>
                  <button className="button-guidance" onClick={Guidance} >Guidance</button>
              </div>
            </Col>
            <Col xs={4} align="center" justify="center" text="center">
              <div>
                <button className="button-help" onClick={Help} >Find Help</button>
              </div>
            </Col>
            <Col xs={4} align="center" justify="center" text="center">
              <div>
                  <button className="button-grounding" onClick={Grounding} >Grounding</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        <div className="breathing">
            <div className="text-breathing" align="center" justify="center" text="center">
                <h1  className="info">
                  <p>Breathing exercise</p>
                  <p>4-8-7 technique</p>
                </h1>
                <h3 className="info">
                  <p>Great help when experiencing anxiety</p>
                  <p><u>Breath in</u> for <u>4</u> seconds</p>
                  <p><u>Hold your breath</u> for <u>8</u> seconds</p>
                  <p>then <u>breath out</u> for <u>7</u> seconds</p>
                </h3>
                < h3 className="info2">
                      Reduces anxiety and helps to get to sleep
                    </h3>
                <input className="start-breathing" type="submit" value="Start" onClick={() => setInMotion(true)} />
                <input className="restart" type="submit" value="Restart" onClick={restartExercise} />
              </div>
              <div className="circles">
                <div className="breath-in" style={{ opacity: hideTimer1 ? 1 : 0, transition: scaleTimer1 ? "all .4s ease-in" : 0, transform: scaleTimer1 ? "scale(1.1)" : 0}}>
                  <CountdownCircleTimer
                    isPlaying={inMotion}
                    duration={4}
                    size={isTabletOrMobile ? 370 : 450 && isTabletOrMobile2 ? 340 : 450}
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
                    size={isTabletOrMobile ? 370 : 450}
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
                <div className="breath-out" style={{ opacity: hideTimer3 ? 1 : 0, transition: scaleTimer3 ? "all .7s ease-in-out" : 0, transform: scaleTimer3 ? "scale(1.2)" : 0}}>
                  <CountdownCircleTimer
                    isPlaying={inMotion3}
                    duration={7}
                    size={isTabletOrMobile ? 370 : 450}
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
              </div>
        </div>
    </>
  );
}


export default Breathing;
