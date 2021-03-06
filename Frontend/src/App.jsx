import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from "redux";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import reducers from "./redux/reducers";
import ReduxThunk from 'redux-thunk'
import Verify from "./pages/Verify";
import ProductScreen from "./pages/ProductScreen/ProductScreen";
import Navigation from "./components/Navigation/Navigation";
import FooterArea from "./components/Footer/FooterArea";
import FooterBottom from "./components/Footer/FooterBottom";
import Shop from "./pages/Shop/Shop";
import CartScreen from "./pages/CartScreen/CartScreen"
import UserProfile from "./pages/Profile/User/UserProfile";
import ProductCreateScreen from "./pages/Profile/Admin/ProductCreate/ProductCreateScreen"
import ProductEditScreen from "./pages/Profile/Admin/ProductEdit/ProductEditScreen"
import HomeScreen from "./pages/HomeScreen/HomeScreen"
import PaymentScreen from "./pages/PaymentScreen/PaymentScreen";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose; 
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk))

const store = createStore(reducers, enhancer);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/register' component = {Register} />
          <Route path='/login' component = {Login} />
          <Route path='/verify' component = {Verify} />
          <Route path= '/shop/:id' component={ProductScreen}/>
          <Route path='/shop' component={Shop}/>
          <Route path = '/cart' component ={CartScreen} />
          <Route path = '/payment' component={PaymentScreen}/>
          <Route path = '/userProfile' component={UserProfile}/>
          <Route path = '/admin/product/:id/edit' component={ProductEditScreen}/>
          <Route path = '/admin/product/create' component={ProductCreateScreen}/>
          <Route path='/' component = {HomeScreen} />
        </Switch>
        <FooterArea></FooterArea>
        <FooterBottom></FooterBottom>
      </Router>
    </Provider>
  );
}

export default App;
