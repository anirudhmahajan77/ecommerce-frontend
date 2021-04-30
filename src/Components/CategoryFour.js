import React from 'react';
import Product from './Product';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

class CategoryFour extends React.Component{
    constructor(){
        super();
        this.state = {
            product: [],
            category: [
                {
                    id: 1,
                    name: "Seeds"
                },
                {
                    id: 2,
                    name: "Oils"
                },
                {
                    id: 3,
                    name: "Skin Care"
                },
                {
                    id: 4,
                    name: "Others"
                }
            ]
        }
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        axios.get('http://ecommerce-assignment-full.herokuapp.com/category/4').then((res) => {
            let response = res.data.product;
            this.setState({
                product: response
            })
        })
    }

    render(){
        return(
            <div>
                <Header />
                <div className='categoryHolder'>
                    <h3>Show By Category: </h3>
                    <Link className='categoryLink' to='/'><p className='category'>All Products</p></Link>
                    {
                        this.state.tags !== [] ?
                            this.state.category.map((category) => {
                                return (
                                    <Link key={category.id} className='categoryLink' to={`/category/${category.id}`}><p className='category'>{category.name}</p></Link>
                                )
                            })
                            : null
                    }
                </div>
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

export default CategoryFour;