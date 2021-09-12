import './FeaturedItem.css';

function FeatureItem({stock, model, gender, price, hidden}) {
    return (
        <div className={hidden}>
            <div className="stock">
                <span>{stock}</span>
            </div>
            <img src="/" alt="" />
            <div className="model__price">
                <div className="model__gender">
                    <span className="model">{model}</span>
                    <span className="dash"></span>
                    <span className="gender">{gender}</span>
                </div>
                <div className="price">
                    <span>{price}</span>
                </div>
            </div>
            
            
        </div>
    )
}

export default FeatureItem
