import React from 'react';
import "../assets/styles/Header.css"
import {Row} from "react-bootstrap";
function Master(props) {
    return (
        <div id="masterDiv" style={{color:"blue",height:"auto",position:"center",minHeight:"200px",margin:"5.25rem" ,width:"1280px",maxWidth:"1920px",padding:"50px" }}>
           <Row> <div className="divsHome" ></div> <div className="divsHome" ></div>  <div className="divsHome" ></div> <div className="divsHome" ></div> </Row>
        </div>
    );
}

export default Master;