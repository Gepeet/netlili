import LinkArrow from '../Links and arrow/LinkArrow';
import './Mission.css';

function Mission() {
    return (
        <div>
            <div className="mission__container">
                <div className="mission__message">We couldn’t find a trail shoe that was tough enough, light enough or fast enough to take us where we wanted to go. So we created it.</div>
                <div className="mission__link">
                    
                        <LinkArrow
                        text = "Discover our mission"
                        color = "white"
                        arrowc = "white"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Mission
