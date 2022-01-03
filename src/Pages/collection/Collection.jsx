import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../Components/collection-item/CollectionItem';
import { selectCollectionsForPreview} from '../../Redux/shop/shop.selector';
import './Collection.scss';
import { createStructuredSelector } from 'reselect';

const collection = (collections,id) =>  collections.filter((collection)=>(collection.title===id?collection:null));

const CollectionPage = ({ collections ,match}) => {
  const singleCollection = collection(collections,match.params.CollectionId)
  const { title, items } = singleCollection[0];
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


const mapStatetoProps = createStructuredSelector ({
  collections : selectCollectionsForPreview
})

export default connect(mapStatetoProps)(CollectionPage);