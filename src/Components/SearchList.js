import React from 'react';
import Product from './Product';
import axios from 'axios';
import '../Styles/SearchList.css'

class SearchList extends React.Component{
    constructor(){
        super();
        this.state = {
            product: []
        }
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        axios.get('http://ecommerce-assignment-full.herokuapp.com/search/'+this.props.searchKey).then((res) => {
            let response = res.data.product;
            this.setState({
                product: response
            })
            console.log(response)
        })
    }

    render(){
        return(
            <div>
                <h1 className="searchTitle">Search Result for: {this.props.searchKey}</h1>
                {
                    this.state.product !== []?
                    this.state.product.map((singleproduct)=>{
                        return(<Product product={singleproduct} key={singleproduct.uuid} refresh={this.loadProducts} />)
                    })
                    : null
                }
            </div>

        )
    }
}

export default SearchList;