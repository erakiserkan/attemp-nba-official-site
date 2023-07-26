import React from 'react';
import {Container, Nav, Navbar, NavDropdown, Row, Col} from "react-bootstrap";
import {useState} from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as NBAIcons from 'react-nba-logos';
import "../assets/styles/Header.css"
import {useEffect} from "react";
import NbaLogo from "./NbaLogo";


function Header(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);

            setShow(false);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const NBAIcon = (name) => {
        if (name !== undefined && name !== null) {

            let Logo = NBAIcons[name.toString()];

            return <Logo size={"30px"}/>;
        }


    };

    const handleDropdownClick = () => {
        window.location.href = '/teams'
    };
    const handleClickDropdownCon = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }
    const goTeamPage = (teamName) => (event) => {
        event.preventDefault();
        event.stopPropagation();

        let teamPage="https://www.nba.com/"+ props.goTeamOffPage(teamName);
        window.open(teamPage, '_blank');
    }


    return (
        <div>
            <Navbar collapseOnSelect  expand="md" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="/" className="navbar-brand"><NbaLogo />NBA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse >
                        <Nav className="me-auto ">
                            <Nav.Link  href="/stats">Stats</Nav.Link>
                            <Nav.Link href="/standings">Standings</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                            <NavDropdown

                                className="custom-dropdown "
                                title="Teams"
                                id="collasible-nav-dropdown" show={windowWidth >= 768 && show}
                                onClick={handleDropdownClick}

                                onMouseEnter={windowWidth>=768 && showDropdown}
                                onMouseLeave={hideDropdown}

                            >

                                <Container onClick={handleClickDropdownCon} className="teamsDropdownMenu" >


                                    <Row  >

                                        {props.nbaData.map((data) =>
                                            <Col md="6" xs="12" lg="4"  className="teamsDropdownCol">
                                                <h9 className="teamsHeaderDropdown">{data.name}</h9>
                                                {data.teams.map((teamsData) =>
                                                    <div >
                                                    <NavDropdown.Item id={teamsData.recordId} className="teamsDropdownItem"
                                                                      onClick={goTeamPage(teamsData.name)}
                                                    >{NBAIcon(teamsData.content)}{teamsData.name} </NavDropdown.Item></div>
                                                )}
                                            </Col>
                                        )}

                                    </Row>

                                </Container>

                            </NavDropdown>

                        </Nav>
                        <Nav className="custom-nav">
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;