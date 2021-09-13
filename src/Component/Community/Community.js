import React from 'react'
import './Community.css'
import imageIs from '../images/isaac.jpg'
import imagets from '../images/brian.jpg'
import CalltoAction from './contents/cta/CalltoAction'
import QA from './contents/qa/QA'
import Links from './contents/Links/Links'

function Community() {
    return (
        <div className="community">
            <div className="top__com">
                <div className="jw">
                    <h3>JOIN OUR COMMUNITY</h3>
                    <h1>WHAT DO YOU RUN FOR?</h1>
                </div>
                <div className="image__right">
                    <img src={imageIs} alt="" />
                    <img src={imagets} alt="" />
                </div>
            </div>
            <div className="ctas">
                <CalltoAction/>
                <QA/>
            </div>
            <Links/>
        </div>
    )
}

export default Community
