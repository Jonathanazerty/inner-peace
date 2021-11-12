import React from "react";
import './Help.css';
import speak from '../images/conversation.png';
import heart from '../images/heart.png';
import help from '../images/help.png';
import find from '../images/find.png';
import {Container, Row, Col} from 'react-grid-system';
import {useHistory} from 'react-router-dom';


const Help = (props) => {

    let history = useHistory();

    const Grounding = () => {
        history.push('/Grounding')
    }

    const Entries = () => {
        history.push('/Entries')
    }

    const Breathing = () => {
        history.push('/Breathing')
    }

    return (
        <>
            <div className='help-header'>
                <Container fluid>
                    <Row direction="row" className='help-buttons'>
                        <Col className='help-button'>
                            <div>
                                <button className="button-breathing" onClick={Breathing}>Breathing</button>
                            </div>
                        </Col>
                        <Col className='help-button'>
                            <div>
                                <button className="button-entries" onClick={Entries}>Entries</button>
                            </div>
                        </Col>
                        <Col className='help-button'>
                            <div>
                                <button className="button-grounding" onClick={Grounding}>Grounding</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="helps">
                <div className="near">
                    <h2 className='ask'> Help near you</h2>
                    <div className="speak">
                        <p className="text">Dear friends,</p>
                        <img className="icon-help" src={speak} alt="read"/>
                        <p className="text">On the map you can find psychologists in Flanders.</p>
                        <p className="text">Don't hesitate to ask for help !</p>
                    </div>
                    <div className="help">
                        <img className="icon-help" src={help} alt="read"/>
                        <p className="text">The biggest step is being aware of it and the next step is the most
                            courageous one,</p>
                        <p className="text"><em>asking for help !</em></p>
                    </div>
                    <div className="heart">
                        <p className="text">When we are physically hurt, we go to the doctor so</p>
                        <p className="text">when we are mentally hurt, we go to the psychologist.</p>
                        <img className="icon-help" src={heart} alt="read"/>
                        <p className="text">Fight the taboo and fight for yourself !</p>
                    </div>
                </div>
                <div className="asking">
                    <div className="askWrapper">
                        <h2 className="ask"> Asking for help is brave !</h2>
                        <img className="icon-find" src={find} alt="read"/>
                    </div>
                    <div className="map-psychologists">
                        <iframe title="Psychologists Map of Flanders in Belgium"
                                src="https://www.google.com/maps/d/embed?mid=1_NIgJ2l5J8IzI7hfAP6ESRYHeX8"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help;