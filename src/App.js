import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { db, auth } from './firebase';

/* Components */
import { useStateValue } from './components/StateProvider';
import NotFound from "./components/NotFound";
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Checkout from "./components/checkout/Checkout"
import ProductPage from "./components/product/ProductPage"
import Login from "./components/login/Login"
import Inspiration from "./components/inspiration/Inspiration"


function App() {
  const [{user, products, loading}, dispatch] = useStateValue();

  useEffect(() => {
    //const unsubscribe = db.collection('products').get().then(col => {
      db.collection('products').get().then(col => {
      col.forEach(doc => {
        dispatch({
          type: "SET_PRODUCT",
          product: {
            category: doc.data().category,
            collection: doc.data().collection,
            description: doc.data().description,
            id: doc.id,
            imageUrl: doc.data().imageUrl,
            measurement: doc.data().measurement,
            name: doc.data().name,
            price: doc.data().price,
            quantity: doc.data().quantity,
          }
        })
      })
      
    }).catch(e => console.error("Error getting document: ", e));
    //cleanup
    /*return () => {
      unsubscribe();
    }*/
  }, [])
  /*useEffect(() => {
    console.log("fetching from firestore...");
    
    let productsSnapshot = [];
    const unsubscribe = db.collection('products').get().then(col => {
      console.log("fetching from firestore...", col.docs);
      col.forEach(doc => {
        productsSnapshot.push(doc.data());
      })
    }).catch(e => console.error("Error getting document: ", e));
    
    if(productsSnapshot !== []){
      dispatch({
        type: "SET_PRODUCTS",
        products: productsSnapshot
      })
      dispatch({
        type: "SET_LOADING",
        loading: !loading
      })
    }
    //console.log("productsSnapshot >>>> ", productsSnapshot);
    //cleanup
    return () =>{
      unsubscribe();
    }
  }, []);*/
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
    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      <Router>
        <Nav />
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
      <Footer />
    </div>
  );
}

export default App;
