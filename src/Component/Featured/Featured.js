import './Featured.css';
import FeatureItem from './FeatureItem';
import imageOne from '../images/shoes-2.jpg';
import imageTwo from '../images/shoes-1.jpg';
import LinkArrow from '../Links and arrow/LinkArrow';

function Featured() {
    return (
        <div className="featured">
            <div className="featured__top">
                  <h1>Featured</h1>
                  <LinkArrow
                  text = "Discover our products"
                  color = "black"/>
                  
            </div>
            
            <div className="featured__container">
                <FeatureItem
                stock = "On Stock"
                model = "XGY-332"
                gender = "Female"
                price = "P2,000.00"
                hidden = "card"
                image = {imageTwo}/>
                
                    <FeatureItem
                    stock = "Low Stock"
                    model = "CGG-222"
                    gender = "Male"
                    price = "P2,500.00"
                    hidden = "card hidden"
                    image = {imageOne}/>
                
                
            </div>
         
        </div>
    )
}

export default Featured
