import React from 'react';
import { connect } from 'react-redux';
import './collection-item.scss';
import CustomButton from '../custom-button/CustomButton';
import { addItem } from '../../Redux/Cart/cart.action';

function CollectionItem({item ,addItem}) {
    const {name,imageUrl,price} = item
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton 
            onClick={()=>(addItem(item))}
            inverted>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchtoProps = (dispatch)=> ({
    addItem : item => dispatch(addItem(item))
})
export default connect(null , mapDispatchtoProps)(CollectionItem)
