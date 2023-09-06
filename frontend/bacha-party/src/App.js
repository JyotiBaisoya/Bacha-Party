

import './App.css';
import BoysProducts from './component/boysproduct';
import Footer from './component/footer';
import GirlsProducts from './component/girlsproduct';
import Header from './component/header';
import Home from './component/home';
import Login from './component/login';
import ProductDetail from './component/product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Signup from './component/signup';
import Cart from './component/cart';
import Order from './component/order';
import AllProducts from './component/allproduct';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/girls-special" element={<GirlsProducts />} />
      <Route path="/boys-special" element={<BoysProducts />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/orders" element={<Order/>}/>
      <Route path="/products" element={<AllProducts/>}/>
      </Routes>
      <Footer/>
      </Router>
   
     
    
    </div>
  );
}

export default App;
