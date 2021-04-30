import AddProduct from "./Components/AddProduct";
import Home from './Components/Home';
import EditProduct from './Components/EditProduct';
import SearchResult from './Components/SearchResult';
import ProductDetail from './Components/ProductDetail';
import CategoryOne from './Components/CategoryOne';
import CategoryTwo from './Components/CategoryTwo';
import CategoryThree from './Components/CategoryThree';
import CategoryFour from './Components/CategoryFour';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-app-polyfill/stable';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/addproduct' component={AddProduct} />
          <Route path='/editproduct/:editKey' component={EditProduct} />
          <Route path='/search/:searchKey' component={SearchResult} />
          <Route path='/product/:detailKey' component={ProductDetail} />
          <Route path='/category/1' component={CategoryOne} />
          <Route path='/category/2' component={CategoryTwo} />
          <Route path='/category/3' component={CategoryThree} />
          <Route path='/category/4' component={CategoryFour} />
        </Switch>
      </Router>
  );
}

export default App;
