import React from 'react';
import { auth, provider } from '../firebase';
import './LandingPage.css';
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

function LandingPage() {

    const [ state, dispatch ] = useStateValue();

    const signin = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
                
        }).catch(error => {
            alert(error.message)
        });
    }

    return (
        <div className="container">
            <img src="https://assets.website-files.com/5d7ac47d34aefe1ecf290ce6/5d7b9705a7b26e0ae820f0c8_logo_wht.png"></img>
            <h1>Alumni Network</h1>
            <div class="animated-button1" onClick={signin}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Enter
            </div>
        </div>
    )
}

export default LandingPage
