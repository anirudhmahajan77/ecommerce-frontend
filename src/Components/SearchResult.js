import React from 'react';
import Header from './Header';
import SearchList from './SearchList';

class SearchResult extends React.Component{

    componentDidMount(){
        console.log(this.props);
    }

    render(){
        return(
            <>
            <Header searchKey={this.props.match.params.searchKey} />
            <SearchList searchKey={this.props.match.params.searchKey} />
            </>
        )
    }
}

export default SearchResult;