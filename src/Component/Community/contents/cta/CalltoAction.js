import React from 'react'
import './CalltoAction.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function CalltoAction() {
    return (
        <div className="cta">
            <div className="line"></div>
            <h2>Sign Up for exclusive first fan loyalty perks and a sneak peek at our upcoming joint adventure.</h2>
            <div className="social">
                <FacebookIcon/>
                <InstagramIcon/>
            </div>
            <div className="buttons">
                <button className="email">Your email</button>
                <button className="Subscribe">Subscribe</button>
            </div>
            
        </div>
    )
}

export default CalltoAction
