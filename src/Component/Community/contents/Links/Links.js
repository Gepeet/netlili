import React from 'react'
import './Links.css'
import LinksItem from './LinksItem'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Links() {
    return (
        <div className="bottom">
            <div className="translate">
                <span>French</span>
                <div className="curency">
                    <span>US ($USD)</span>
                    <ExpandMoreIcon/>
                </div>
            </div>
            <div className="links">
                <LinksItem
                text="Warranty"/>
                <LinksItem
                text="Refund &amp; Return Policy"/>
                <LinksItem
                text="Shipping Policy"/>
                <LinksItem
                text="Terms of Service"/>
                <LinksItem
                text = "Privacy Policy"/>
            </div>
            <div className="logo__bot">
                <span>c</span>
                <span>adron</span>
                <span>2021</span>
            </div>
        </div>
    )
}

export default Links
