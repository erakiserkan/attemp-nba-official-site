import React from 'react';
import nbaLogo from '../assets/images/nbaLogos.png'; // Logo dosyanızın yolunu doğru şekilde belirtin

const NbaLogo = () => {
    return (
        <img src={nbaLogo} alt="My Logo" style={{minWidth:"13px",height:"23px",borderRadius:"0.25rem"}} />
    );
};

export default NbaLogo;