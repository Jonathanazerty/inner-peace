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
                <Row direction="column">
                    <Col xs={12} className="logo" align="center" justify="center" text="center">
                        <div>
                            <img className="gif" src={logo} alt="logo"/>
                        </div>
                    </Col>
                </Row>
                <Row direction="column">
                    <Col xs={12} className="text-name1" align="center" justify="center" text="center">
                        NEVER EVER DOUBT THE FACT THAT
                    </Col>
                </Row>
                <Row direction="column" >
                    <Col xs={12} className="text-name2" align="center" justify="center" text="center">
                        YOU MATTER !
                    </Col>
                </Row>
                <Row direction="column">
                    <Col xs={12} className="text-name3" align="center" justify="center" text="center">
                        <form>
                            <label className="label">
                                Name:
                                <input  className="input-name" type="text" name="username" placeholder="Don't forget your name" required value={name} onChange={(e) => setName(e.target.value)}/><br></br>
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