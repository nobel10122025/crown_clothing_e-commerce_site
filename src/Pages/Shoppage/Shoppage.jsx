import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOutline from '../../Components/collection-outline/CollectionOutline'
import CollectionPage from '../collection/Collection';
import WithSpinner from '../../Components/with-spinner/WithSpinner';
import { fetchCollectionsStartAsync } from '../../Redux/shop/shop.action';

const CollectionOutlineWithSpinner = WithSpinner(CollectionOutline)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class Shoppage extends Component {

    state = {
        loading : true
    }

    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;        
        fetchCollectionsStartAsync();
        this.setState({loading:false})
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
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())    
});

export default connect(null,mapDispatchToProps)(Shoppage);