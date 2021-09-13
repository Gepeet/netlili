import './Stories.css';
import StoriesItem from './StoriesItem';
import imageOne from '../images/fahad.jpg';
import imageTwo from '../images/yash.jpg';
import LinkArrow from '../Links and arrow/LinkArrow';

function Stories() {
    return (
        <div className="stories">
            <div className="stories__top">
                  <h1>Stories</h1>
                  <LinkArrow
                  text = "Stories"
                  color = "black"
                  arrowc = "black"/>
                  
            </div>
            
            <div className="stories__container">
                <StoriesItem
                category = "STORY"
                date = "JULY 2021"
                header = "The Founders"
                hidden = "story__card"
                image = {imageOne}/>
                
                    <StoriesItem
                    category = "TECHNOLOGY"
                    date = "JULY 2021"
                    header = "Performance and Sustainability should always run together."
                    hidden = "story__card hidden"
                    image = {imageTwo}/>
                
                
            </div>
         
        </div>
    )
}

export default Stories
