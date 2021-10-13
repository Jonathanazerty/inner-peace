import React from "react";
import './Name.css';
import {Container, Row, Col} from 'react-grid-system';
import {useHistory} from 'react-router-dom';
import logo from '../images/Inner Peace.gif';
import Footer from "./Footer";

const Name = () => {

    let history = useHistory();

    const nextPage = () => {
        history.push('/Feeling')
    }

    return (
        <>
            <Container fluid>
                <Row direction="column" style={{ margin: '70px' }} >
                    <Col xs={12} align="center" justify="center" text="center">
                        <div>
                            <img className="gif" src={logo} alt="logo" />
                        </div>
                    </Col>
                </Row>
                <Row direction="column" style={{ fontSize: '18px'}} >
                    <Col xs={12} align="center" justify="center" text="center">
                        NEVER EVER DOUBT THE FACT THAT
                    </Col>
                </Row>
                <Row direction="column" style={{ fontSize: '60px'}} >
                    <Col xs={12} align="center" justify="center" text="center">
                        YOU MATTER !
                    </Col>
                </Row>
                <Row direction="column" style={{ margin: '50px' }} >
                    <Col xs={12} align="center" justify="center" text="center">
                        <form onSubmit>
                            <label>
                                Name:
                                <input class="input-name" type="text" placeholder="Don't forget your name"/><br></br>
                            </label><br></br>
                            <input type="submit" value="Confirm" onClick={nextPage} />
                        </form>
                    </Col>
                </Row>
            </Container>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Name;