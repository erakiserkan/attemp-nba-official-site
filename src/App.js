import React from 'react';
import {NbaData} from "./Components/NbaData";
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Master from "./Pages/Master";
import Stats from "./Pages/Stats";
import News from "./Pages/News";
import TeamsPage from "./Pages/TeamsPage";
import Standings from "./Pages/Standings";
import Footer from "./Components/Footer";


import {Navbar, Nav, Container, NavDropdown,} from "react-bootstrap";



function App(props) {
    let nbaData = NbaData();
    const getTeamPage = (teamName) => {

        let lastWord;
        if (teamName !== "Philadelphia 76ers") {
            const words = teamName.split(' ');
            lastWord = words[words.length - 1];
            console.log(lastWord + "tassak")
        } else {

            lastWord = "sixers";
            console.log("sixers")
        }

        return lastWord;

    }
    return (
        <div style={{backgroundColor:"#f2f2f2"}} >
            <Header goTeamOffPage={getTeamPage} nbaData={nbaData}/>

            <div  style={{minHeight:"50vh"}} >

                <Router >

                    <Routes>
                        <Route exact path="/" element={<Master/>}/>
                        <Route path="stats" element={<Stats/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="teams"
                               element={<TeamsPage goTeamOffPage={getTeamPage} nbaData={nbaData}/>}></Route>
                        <Route path="standings" element={<Standings/>}/>
                    </Routes>
                </Router>

            </div>
            <Footer/>
        </div>
    );
}

export default App;