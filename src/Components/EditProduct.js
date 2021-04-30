import React from 'react';
import '../Styles/EditProduct.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0,
            shortDesc: "",
            description: "",
            tags: "",
            categoryId: 1,
        }
    }

    componentDidMount(){
        axios.get('http://ecommerce-assignment-full.herokuapp.com/product/'+this.props.match.params.editKey).then(
            (response) => {
                console.log(response.data.product);
                let res = response.data.product
                this.setState({
                    name: res.name,
                    price: res.price,
                    shortDesc: res.shortDesc,
                    description: res.description,
                    tags: res.tags,
                    categoryId: res.category.id
                })
            }
        )
    }

    updateProduct = () => {
        if (this.state.name === '') {
            alert("Name Cannot Be Empty!");
        }
        else if (this.state.price === 0) {
            alert("Price Cannot Be Zero!");
        }
        else if (this.state.shortDesc === '') {
            alert("Short Description Cannot Be Empty!");
        }
        else if (this.state.description === '') {
            alert("Description Cannot Be Empty!");
        } else {
            axios.put("https://ecommerce-assignment-full.herokuapp.com/product/"+this.props.match.params.editKey, this.state);
            alert("Product Updated Successfully!");
        }

    }

    render() {
        return (
            <div className='holder'>
                <div className='header'>
                    <Link to='/'><p className='arrow'><i class="fas fa-arrow-left"></i></p></Link>
                    <h1>Edit Product</h1>
                    <div></div>
                </div>
                <div className='body'>
                    <div className='inputHolder'>
                        <h3 className='fieldName'>Product Name: </h3>
                        <input className='inputField' value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} />
                    </div>
                    <div className='inputHolder'>
                        <h3 className='fieldName'>Product Price: </h3>
                        <input className='inputField' value={this.state.price} type='number' onChange={(event) => { this.setState({ price: event.target.value }) }} />
                    </div>
                    <div className='inputHolder'>
                        <h3 className='fieldName'>Product Short Description: </h3>
                        <input className='inputField' value={this.state.shortDesc} onChange={(event) => { this.setState({ shortDesc: event.target.value }) }} />
                    </div>
                    <div className='inputHolder'>
                        <h3 className='fieldName'>Product Description: </h3>
                        <input className='inputField' value={this.state.description} onChange={(event) => { this.setState({ description: event.target.value }) }} />
                    </div>
                    <div className='inputHolder'>
                        <h3 className='fieldName'>Tags (Seperate By Comma): </h3>
                        <input className='inputField' value={this.state.tags} onChange={(event) => { this.setState({ tags: event.target.value }) }} />
                    </div>
                    <div className='inputHolder'>
                        <h3 className='fieldName'>Category: </h3>
                        <div className='checkboxHolder'>
                            <div className='checkboxGroup'><input type='radio' onChange={() => { this.setState({ categoryId: 1 }) }} className='checkField' name='category' value='1' checked={this.state.categoryId === 1} /> <p>Seeds</p></div>
                            <div className='checkboxGroup'><input type='radio' onChange={() => { this.setState({ categoryId: 2 }) }} className='checkField' name='category' value='2' checked={this.state.categoryId === 2} /> <p>Oils</p></div>
                            <div className='checkboxGroup'><input type='radio' onChange={() => { this.setState({ categoryId: 3 }) }} className='checkField' name='category' value='3' checked={this.state.categoryId === 3} /> <p>Skin Care</p></div>
                            <div className='checkboxGroup'><input type='radio' onChange={() => { this.setState({ categoryId: 4 }) }} className='checkField' name='category' value='4' checked={this.state.categoryId === 4} /> <p>Others</p></div>
                        </div>

                    </div>
                </div>
                <div className='actionButton'>
                    <p onClick={this.updateProduct} className='addNewProduct'>Update Product</p>
                    <Link to='/' className='cancelLink'><p className='cancelProduct'>Close</p></Link>
                </div>
            </div>
        )
    }
}

export default EditProduct;