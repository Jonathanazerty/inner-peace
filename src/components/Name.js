import React, { useState } from 'react';
import './Name.css';
import {Container, Row, Col} from 'react-grid-system';
import {useHistory} from 'react-router-dom';
import logo from '../images/Inner Peace.gif';
import Footer from "./Footer";

const Name = (props) => {

    const [name, setName] = useState('');

    let history = useHistory();

    const nextPage = () => {
        history.push('/Feeling', [name])
    }

    const handleForm = (event) => {
        event.preventDefault();
        nextPage();
    }
    

    return (
        <div className='name'>
            <Container fluid>
                <Row direction="column" className='logoWrapper'  >
                    <Col xs={12} align="center" justify="center" text="center">
                        <div>
                            <img className="gif" src={logo} alt="logo"/>
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
                <Row direction="column" style={{ margin: '40px' }} >
                    <Col xs={12} align="center" justify="center" text="center">
                        <form>
                            <label class="label">
                                Name:
                                <input  class="input-name" type="text" name="username" placeholder="Don't forget your name" required value={name} onChange={(e) => setName(e.target.value)}/><br></br>
                            </label><br></br>
                            <input className="button-confirm" type="submit" value="Confirm" onClick={(event) => handleForm(event)} />
                        </form>
                    </Col>
                </Row>
            </Container>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Name;