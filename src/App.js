import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';



export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
<UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
      <h3> email:{loggedInUser.email}</h3>
      <Header></Header>
      <Router>
      <Switch>
          <Route path="/shop">
              <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
         <Route path="/inventory">
              <Inventory></Inventory>
         </Route>
         <Route path="/Login">
             <Login></Login>
         </Route>
         <Route path="/Shipment">
             <Shipment></Shipment>
         </Route>
          <Route exact path="/">
              <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
          </Route>
          <Route path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
