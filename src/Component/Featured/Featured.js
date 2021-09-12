import './Featured.css';
import FeatureItem from './FeatureItem';

function Featured() {
    return (
        <div className="featured">
            <div className="featured__top">
                  <h1>Featured</h1>
                  <h5>Discover our products<span>r-arrow</span></h5>
            </div>
            
            <div className="featured__container">
                <FeatureItem
                stock = "On Stock"
                model = "XGY-332"
                gender = "Female"
                price = "P2,000.00"
                hidden = "card"/>
                
                    <FeatureItem
                    stock = "Low Stock"
                    model = "CGG-222"
                    gender = "Male"
                    price = "P2,500.00"
                    hidden = "card hidden"/>
                
                
            </div>
         
        </div>
    )
}

export default Featured
