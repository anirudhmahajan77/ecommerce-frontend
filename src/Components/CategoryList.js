import React from 'react';
import Product from './Product';
import axios from 'axios';

class CategoryList extends React.Component{
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
        axios.get('/category/'+this.props.id).then((res) => {
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

export default CategoryList;