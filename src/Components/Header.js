import React from "react";
import axios from "axios";
import '../Styles/Header.css'
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            searchSuggestion: [],
        }

    }

    componentDidMount() {
        this.setState({
            search: this.props.searchKey
        })
    }

    searchSuggestions = (event) => {
        let searchValue = event.target.value;
        if(searchValue !== ''){
            searchValue = searchValue[0].toUpperCase() + searchValue.substring(1); 
        }      
        this.setState({
            search: searchValue
        })
        if(searchValue !== ''){
            axios.get('http://ecommerce-assignment-full.herokuapp.com/search/'+ searchValue).then((res) => {
                let response = res.data.product;
                this.setState({
                    searchSuggestion: response,
                })            
            })
        }
        
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <Link to='/' className='homeLink'><h2>Ecommerce</h2></Link>
                    <div className='search'>
                        <input value={this.state.search} className='searchbar' onChange={(event)=>this.searchSuggestions(event)} />
                        <Link to={`/search/${this.state.search}`} className='searchLink'><button className='searchicon'><i class="fas fa-search"></i></button></Link>
                    </div>
                    <Link to='/addproduct' className='addProductLink'><p className='addProduct'>Add Product <i class="fas fa-plus"></i></p></Link>
                </div>
                <div className='fix'></div>
                <div className='searchsuggestions'>
                    { this.state.searchSuggestion!==[]?
                        this.state.searchSuggestion.map((suggestion)=>{
                            return (
                                <p>{suggestion.name}</p>
                            )
                        })
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Header;