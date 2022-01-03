import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOutline from '../../Components/collection-outline/CollectionOutline'
import { firestore , convertCollectionsSnapshotToMap } from '../../firebase/Firebase';
import CollectionPage from '../collection/Collection';
import {updateCollections} from '../../Redux/shop/shop.action';
import WithSpinner from '../../Components/with-spinner/WithSpinner';

const CollectionOutlineWithSpinner = WithSpinner(CollectionOutline)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class Shoppage extends Component {

    state = {
        loading : true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.get().then((snapShot)=>{
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        // console.log(collectionsMap)
        updateCollections(collectionsMap);
        this.setState({loading : false})
        })
    }
    
    
    render() {
        const {match} =this.props
        const {loading} = this.state
        return (
            <div className="shop-page">
                 <Route exact path={`${match.path}`} render={(props)=>(< CollectionOutlineWithSpinner isLoading={loading} {...props} />)} />
                 <Route path={`${match.path}/:CollectionId`}  render={(props)=>(< CollectionPageWithSpinner isLoading={loading} {...props} />)} />
           </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(
    null,
    mapDispatchToProps
  )(Shoppage);