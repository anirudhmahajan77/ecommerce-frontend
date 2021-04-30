import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
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

    render() {
        return (
            <>
                <Header />
                <div className='categoryHolder'>
                    <h3>Show By Category: </h3>
                    <Link className='categoryLink' to='/'><p className='tag'>All Products</p></Link>
                    {
                        this.state.tags !== [] ?
                            this.state.category.map((category) => {
                                return (
                                    <Link className='categoryLink' to={`/category/${category.id}`}><p className='category'>{category.name}</p></Link>
                                )
                            })
                            : null
                    }
                </div>
                <ProductList />
            </>
        )
    }
}

export default Home;