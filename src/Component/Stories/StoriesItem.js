// import './Stories.css';
import './StoriesItem.css';

function StoriesItem({category, date, header, hidden, image}) {
    return (
        <div className={hidden}>
            <div 
            style={{
                backgroundImage:`url(${image})`
            }}
            className="img"></div>
            <div className="story__cd">
                <span>{category}</span>
                <span>{date}</span>
            </div>
            {/* <img src={image} alt="" /> */}
            <div className="story__header">
                <h3>{header}</h3>
            </div>
            
            
            
        </div>
    )
}

export default StoriesItem
