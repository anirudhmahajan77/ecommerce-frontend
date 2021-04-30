import React from 'react';
import "../Styles/Product.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

class Product extends React.Component {
    deleteProduct = () => {
        axios.delete("http://ecommerce-assignment-full.herokuapp.com/product/" + this.props.product.uuid).then(
            () => {
                this.props.refresh();
            }
        );
    }

    render() {
        return (
            <div className='productHolder'>
                <Link to={`/product/${this.props.product.uuid}`} className='productLink'>
                    <div className='productDetail'>
                        <p className='productName'>{this.props.product.name}</p>
                        <p className='productShortDesc'>{this.props.product.shortDesc}</p>
                        <p className='productCategory'>In {this.props.product.category.name}</p>
                    </div>
                </Link>
                <div className='productButtons'>
                    <p> ₹{this.props.product.price}</p>
                    <Link className='editLink' to={`/editproduct/${this.props.product.uuid}`}><p className='editButton'>Edit</p></Link>
                    <p className='deleteButton' onClick={() => { this.deleteProduct() }}>Delete</p>
                </div>

            </div>
        )
    }
}

export default Product;