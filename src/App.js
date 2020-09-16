import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { db, auth } from './firebase';

/* Components */
import { useStateValue } from './components/StateProvider';
import NotFound from "./components/NotFound";
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Checkout from "./components/checkout/Checkout"
import ProductPage from "./components/product/ProductPage"
import Login from "./components/login/Login"
import Inspiration from "./components/inspiration/Inspiration"


function App() {
  const [{user, products}, dispatch] = useStateValue();
  let productsSnapshot = [];
  
  useEffect(() => {
    
    const unsubscribe = db.collection('products').get().then(col => {
      col.forEach(doc => {
        productsSnapshot.push(doc.data());
      })
    }).catch(e => console.error(e));
    
    if(productsSnapshot !== []){
      dispatch({
        type: "SET_PRODUCTS",
        products: productsSnapshot
      })
    }
    //console.log("productsSnapshot >>>> ", productsSnapshot);
    //cleanup
    return () =>{
      console.log("HERE LOOK AT MEEE!!!!!!!! >>> ", products);
      unsubscribe();
    }
  }, []);
/**

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
 */
  
  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else{
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    console.log("CURRENT USER: ", user)
    //cleanup
    return () =>{
      unsubscribe();
    }

  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/inspiration" component={Inspiration}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/login" component={Login}/>
            <Route path="/wishlist">
              <h2>MY WISHLISTS</h2>
              Do you have items saved already? 
              <Link to="/login">
                  <span> Log in </span>
              </Link>to your account.
            </Route>
            <Redirect exact from='/products' to='/' />
            <Route path="/products/:id" component={ ProductPage } />
            <Route path="*" component={NotFound} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
