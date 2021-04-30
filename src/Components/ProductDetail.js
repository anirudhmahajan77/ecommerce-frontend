import React from 'react';
import Header from './Header';
import axios from 'axios';
import '../Styles/ProductDetail.css';
import { Link } from 'react-router-dom';

class ProductDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0,
            shortDesc: "",
            description: "",
            tags: [],
            categoryId: 1,
            uid: 0,
        }
    }

    componentDidMount() {
        const id = this.props.match.params.detailKey;
        axios.get('/product/' + id).then(
            (response) => {
                let product = response.data.product;
                let productTags = []
                if (product.tags !== null) {
                    productTags = product.tags.split(",");
                }
                this.setState({
                    name: product.name,
                    price: product.price,
                    shortDesc: product.shortDesc,
                    description: product.description,
                    tags: productTags,
                    categoryId: product.category.id,
                    uid: product.uuid
                })
            }
        )
    }

    render() {
        return (
            <>
                <Header />
                <div className='productDetailHolder'>
                    <h1>{this.state.name}</h1>
                    <h3>₹{this.state.price}</h3>
                    <h3>{this.state.shortDesc}</h3>
                    <p>{this.state.description}</p>
                    <div className='tagHolder'>
                    <p>Tags: </p>
                        {
                            this.state.tags !== [] ?
                                this.state.tags.map((tag) => {
                                    return (
                                        <p className='tag'>{tag}</p>
                                    )
                                })
                                : null
                        }
                    </div>
                </div>
                <div className='buttonHolder'>
                    <Link to={`/editproduct/${this.state.uid}`} className='editLink'><p className='editProductButton'>Edit</p></Link>
                </div>
            </>
        )
    }
}

export default ProductDetail;