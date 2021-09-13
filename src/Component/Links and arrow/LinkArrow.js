import './LinkArrow.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function LinkArrow({text, color, arrowc}) {

    return (
        <>
            <div className="ds__arrow">
                    <h5 style={{
                        color:(color)
                    }}>{text}</h5>
                    <ArrowRightAltIcon 
                    style={{
                        color:(arrowc)
                    }}
                    className="arrow__right"/>
            </div>
        </>
    )
}

export default LinkArrow
