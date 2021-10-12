import React from "react";
import './Name.css';
import {Container, Row, Col} from 'react-grid-system';
import {useHistory} from 'react-router-dom';
import logo from '../images/Inner Peace.gif';

const Name = () => {

    let history = useHistory();

    const redirect = () => {
        history.push('/Feeling')
    }

    return (

        <Container fluid>
            <Row align="center" justify="center" direction="column" style={{margin: '70px'}}>
                <Col xs={3}>
                    <div>
                        <img className="gif" src={logo} alt="logo"/>
                    </div>
                </Col>
            </Row>
            <Row align="center" justify="center" direction="column" style={{fontSize: '18px'}}>
                <Col xs={5}>
                    NEVER EVER DOUBT THE FACT THAT
                </Col>
            </Row>
            <Row align="center" justify="center" direction="column" style={{fontSize: '60px'}}>
                <Col xs={8}>
                    YOU MATTER !
                </Col>
            </Row>
            <Row align="center" justify="center" direction="column" style={{margin: '50px'}}>
                <Col xs={3}>
                    <form onSubmit>
                        <label>
                            Name:
                            <input class="input-name" type="text" placeholder="Don't forget your name"/><br></br>
                        </label><br></br>
                        <input type="submit" value="Confirm" onClick={redirect}/>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Name;