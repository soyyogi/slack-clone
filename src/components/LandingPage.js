import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
    function launchChat(e) {
        e.preventDefault()
    }

    return (
        <div className="container">
            <img src="https://assets.website-files.com/5d7ac47d34aefe1ecf290ce6/5d7b9705a7b26e0ae820f0c8_logo_wht.png"></img>
            <h1>Alumni Network</h1>
            <a href="#" class="animated-button1" onClick={launchChat}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Enter
            </a>
        </div>
    )
}

export default LandingPage
