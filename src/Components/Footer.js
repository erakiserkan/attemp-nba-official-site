import React from 'react';
import "../assets/styles/Footer.css"
import {Container, Row, Col, Button} from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer(props) {

    const directSocialMediaPages=(whichMedia)=>{
        let url;
        if(whichMedia==="tiktok"){
            url="https://www.tiktok.com/@nba"
        }
        else if(whichMedia==="snapchat"){
            url="https://www.snapchat.com/add/nba"
        }
        else{
            url="http://www."+whichMedia+".com/NBA";

        }
        window.open(url, 'blank');

    }


    return (
        <div>
            <div className="footerDiv">
                <Container>
                    <Row className="footerFirstRow">
                        <Col lg="2" className="footerCol">
                            <h5>NBA ORGANIZATION</h5>
                            <a href="https://www.nba.com/id" target="_blank">NBA ID</a>
                            <a href="https://official.nba.com/" target="_blank">NBA Official</a>
                            <a href="https://careers.nba.com/" target="_blank">NBA Careers</a>
                        </Col>
                        <Col lg="2" className="footerCol">
                            <h5>NBA INITIATIVES</h5>
                            <a href="https://cares.nba.com/" target="_blank">NBA Cares</a>
                            <a href="https://jr.nba.com/" target="_blank">Jr. NBA</a>
                            <a href="https://nbafoundation.nba.com/" target="_blank">NBA Foundation</a>
                            <a href="https://coalition.nba.com/" target="_blank">Social Justice Coalition</a>
                        </Col>
                        <Col lg="2" className="footerCol">
                            <h5>ACROSS THE LEAGUE</h5>
                            <a href="https://pr.nba.com/" target="_blank">NBA Communications</a>
                            <a href="https://lockervision.nba.com/" target="_blank">Lockervision</a>
                            <a href="https://www.example.com" target="_blank">NBA Transactions</a>
                        </Col>
                        <Col lg="2" className="footerCol">
                            <h5>SHOP</h5>
                            <a href="https://www.nbastore.eu/en/" target="_blank">Global Stores</a>
                            <a href="https://www.example.com" target="_blank">NYC Store</a>
                            <a href="https://auctions.nba.com/" target="_blank">NBA Auctions</a>
                            <a href="https://photostore.nba.com/" target="_blank">NBA Photostore</a>
                        </Col>
                        <Col lg="2" className="footerCol">
                            <h5>SUBSCRIPTIONS</h5>
                            <a href="https://www.nba.com/watch/league-pass-stream" target="_blank" className="leaguePassButton">League Pass</a>
                            <a href="https://support.watch.nba.com/hc/en-us" target="_blank">Customer Support</a>

                        </Col>


                    </Row>
                    <Row>
                        <Col lg="6" style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "10px",
                            paddingTop: "3vh",
                            paddingBottom: "3vh"
                        }}>
                            <span>© 2023 NBA Media Ventures, LLC. All rights reserved.</span>
                            <div className="aGroup">
                                <a href="https://www.nba.com/privacy-policy" target="_blank" role="button">Privacy Policy</a>
                                <a href="https://www.nba.com/termsofuse" target="_blank" role="button"> Terms of Use</a>
                                <a href="https://www.nba.com/accessibility" target="_blank" role="button">Accessibility and Closed Captions</a>
                                <a href="https://support.watch.nba.com/hc/en-us" target="_blank" role="button"> Customer Support</a>
                                <a href="https://support.watch.nba.com/hc/en-us" target="_blank" role="button">Manage Cookies</a>
                            </div>
                            <span>If you are having difficulty accessing any content on this website, please visit our Accessibility page.</span>
                            <span>NBA.com is part of Warner Media, LLC’s Turner Sports & Entertainment Digital Network</span>
                        </Col>

                        <Col className="footerColMedia" lg="6">
                            <i role="button" className="fab fa-facebook" onClick={()=>directSocialMediaPages("facebook")} ></i>
                            <i role="button" className="fab fa-instagram" onClick={()=>directSocialMediaPages("instagram")}></i>
                            <i role="button" className="fab fa-snapchat" onClick={()=>directSocialMediaPages("snapchat")}> </i>
                            <i role="button" className="fab fa-tiktok" onClick={()=>directSocialMediaPages("tiktok")}></i>
                            <i role="button" className="fab fa-twitter" onClick={()=>directSocialMediaPages("twitter")}></i>
                            <i role="button" className="fab fa-youtube" onClick={()=>directSocialMediaPages("youtube")}></i>
                            <i role="button" className="fab fa-twitch" onClick={()=>directSocialMediaPages("twitch")}></i>


                        </Col>
                    </Row>

            </Container>
        </div>

</div>
)
    ;
}

export default Footer;