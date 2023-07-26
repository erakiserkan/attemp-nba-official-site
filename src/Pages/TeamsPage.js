import React from 'react';

import {Container, Row, Col} from "react-bootstrap";
import "../assets/styles/TeamsPage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as NBAIcons from 'react-nba-logos';


function TeamsPage(props) {


    const NBAIcon = (name) => {
        if (name !== undefined && name !== null) {

            let Logo = NBAIcons[name.toString()];

            return <Logo style={{ display:"flex",flexShrink: "0" }}size={"55px"}/>;
        }


    };
    const directOffTeamPage = (teamName) => {
        let teamPage="https://www.nba.com/"+ props.goTeamOffPage(teamName);
        window.open(teamPage, 'blank');

    }
    const directOffSchedulePage = (teamName) => {

        let ScheduleUrl ="https://www.nba.com/"+ props.goTeamOffPage(teamName) + "/schedule";


        window.open(ScheduleUrl, '_blank');


    }
    const redirectTeamTicketsPage = (teamName)=>{
        let teamPage="https://www.nba.com/"+ props.goTeamOffPage(teamName)+"/tickets";
        window.open(teamPage, '_blank');
    }

    return (

        <div >
            <div className="secondaryBg">
                <h5 className="teamPageHeader"> ALL TEAMS</h5>
                <Container>
                <Row >
                    {props.nbaData.map((data) =>

                        <Col lg="4"  md="6" xs="12"  style={{ padding: "15px",boxSizing:"border-box"}}>

                            <h6 className="sectionHeader">{data.name}</h6>

                            {data.teams.map((teamsData) =>

                                    <div className="teamCol">
                                   <div>
                                    {NBAIcon(teamsData.content)}</div>
                                    <div  >
                                        <div>
                                            <a role="button" className="teamPageTeams"
                                               onClick={() => directOffTeamPage(teamsData.name)}> {teamsData.name} <i
                                                className="fa-solid fa-arrow-up-right-from-square" style={{fontSize:"1.5vh",color:"#c4bfbf"}}
                                            ></i>< /a>
                                        </div>
                                        <div className="teamPageSubTeamsAttDiv">
                                            <a role="button" >Profile</a>
                                            <a role="button" >Stats</a>
                                            <a role="button"
                                               onClick={() => directOffSchedulePage(teamsData.name)}>Schedule <i
                                                className="fa-solid fa-arrow-up-right-from-square" style={{fontSize:"1.5vh",color:"#c4bfbf"}}
                                                ></i></a>
                                            <a role="button"  onClick={()=>redirectTeamTicketsPage(teamsData.name)}>Tickets <i
                                                className="fa-solid fa-arrow-up-right-from-square" style={{fontSize:"1.5vh",color:"#c4bfbf"}}
                                            ></i></a>
                                        </div>
                                    </div>
                                </div>
                               )}
                        </Col>

                    )}
                    <div className="clearfix"></div>
                </Row></Container>

            </div>
        </div>
    );
}

export default TeamsPage;