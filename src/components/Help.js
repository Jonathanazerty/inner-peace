import React from "react";
import './Help.css';
import speak from '../images/conversation.png';
import heart from '../images/heart.png';
import help from '../images/help.png';
import find from '../images/find.png';
import {Container, Row, Col} from 'react-grid-system';
// import { GoogleMap, useLoadScript } from "@react-google-maps/api";


// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100vh",
//   height: "100vh"  
// };

// const center = {
//   lat: 51.260197,
//   lng: 4.402771
// }

const Help = (props) => {

//   const { isLoaded, loadError } = useLoadScript ({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries
//   });

//   if (loadError) return "Error loading maps";
//   if (!isLoaded) return "loading Maps";
    
    return (
        
      <div className="helps" style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
       <Container fluid>
         <Row direction="row" align="center" justify="center" text="center" style={{ marginTop: '20px'}} >
           <Col className="near" xs={4} style={{ height: '720px', width: '1000px' }}>
             <h2 style={{ marginBottom: '20px' }}> Help near you</h2>
             <div>
               <p style={{ fontSize: '20px'}}>
                <div className="speak"  style={{ marginBottom: '20px' }}>
                    Dear friends,<br></br><br></br>
                    <img className="icon-help" src={speak} alt="read" style={{ height: "80px", width: "80px", float: "right", marginRight:"-10px"}}/>
                    On the map you can find psychologists in Flanders.
                    <br></br>
                    Don't hesitate to ask for help !
                 </div>
                 <div className="help"  style={{ marginBottom: '20px' }}>
                    <img className="icon-help" src={help} alt="read" style={{ height: "80px", width: "80px", float: "left", marginLeft:"-10px"}}/>
                    The biggest step is being aware of it and the next step is the most courageous one,<br></br>
                    asking for help !
                 </div>
                 <div className="heart"  style={{ marginBottom: '30px' }}>
                    When we are physically hurt, we go to the doctor so <br></br>
                    when we are mentally hurt, we go to the psychologist.<br></br>
                    <img className="icon-help" src={heart} alt="read" style={{ height: "80px", width: "80px", float: "right", marginRight:"-10px"}}/><br></br>
                    Fight the taboo and fight for yourself !
                 </div>
               </p>
             </div>
           </Col>
           <Col className="asking" xs={7} style={{ height: '720px', width: '1000px'  }}>
           <img className="icon-find" src={find} alt="read" style={{ height: "100px", width: "100px", float: "right", margin:"-10px"}}/>
            <h2> Asking for help is brave !</h2>
            <div style={{ margin: '40px', marginTop: '70px'}}>
              {/* <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}></GoogleMap> */}
              <iframe title="Psychologists Map of Flanders in Belgium" src="https://www.google.com/maps/d/embed?mid=1_NIgJ2l5J8IzI7hfAP6ESRYHeX8" width="870" height="500" />
            </div>
            </Col>
         </Row>
       </Container>
     </div>
      
  )
  }

export default Help;