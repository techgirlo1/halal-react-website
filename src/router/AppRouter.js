import React, { Fragment, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProductPage from '../pages/ProductPage'
import ContactPage from '../pages/ContactPage'
import CartPage from '../pages/CartPage'
import RefundPage from '../pages/RefundPage'
import TermsPage from '../pages/TermsPage'
import PrivacyPage from '../pages/PrivacyPage'
import AddCartPage from '../pages/AddCartPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ForgetPage from '../pages/ForgetPage'
import ProfilePage from '../pages/ProfilePage'
import ResetPage from '../pages/ResetPage'
import axios from 'axios'
import APPUrl from '../RestAPI/APPUrl'
import Topnav from '../component/Topnav/Topnav'
import OrderListPage from '../pages/OrderListPage'
import SearchPage from '../pages/SearchPage'
import ProcessListPage from '../pages/ProcessListPage'
import DeliveredListPage from '../pages/DeliveredListPage'


function AppRouter() {


  const [state, setState] = useState({
    user: {},
  });

  // Define setUser function
  const setUser = (user) => {
    setState({ user: user });
  };

  useEffect(() => {
    // Fetch user data
    axios.get(APPUrl.User)
      .then((response) => {
        // handle success
        setUser(response.data); // Call setUser to update the state
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);


  


  return (
    <Fragment>
      <Topnav  user={state.user} setUser={setUser}  key={state.cartCount}/>
    <Switch>
      <Route exact path="/" render={(props) => <HomePage {...props}  />}/>
      <Route exact path="/about" render={(props) => <AboutPage {...props} />}/>
      <Route exact path="/product" render={(props) => <ProductPage {...props} />}/>
      <Route exact path="/contact" render={(props) => <ContactPage {...props} />}/>
      <Route exact path="/cart" render={(props) => <CartPage {...props}  user={state.user} /> }  />
      <Route exact path="/refund" render={(props) => <RefundPage {...props} />}/>
      <Route exact path="/terms" render={(props) => <TermsPage {...props} />}/>
      <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} />}/>
      <Route exact path="/productSearch/:search" render={(props) => <SearchPage {...props} />}/>
      <Route exact path="/addcart/:productID/:productname" render={(props) => <AddCartPage {...props} user={state.user} />}/>
      <Route exact path="/login" render={(props) => <LoginPage {...props} user={state.user} setUser={setUser} />} />
      <Route exact path="/register" render={(props) => <RegisterPage {...props}  />}/>
      <Route exact path="/forgetpassword" render={(props) => <ForgetPage {...props} />}/>
      <Route exact path="/auth/password/email/reset" render={(props) => <ResetPage {...props} />} />
      <Route exact path="/orderlist" render={(props) => <OrderListPage {...props} user={state.user}  />}/>
      <Route exact path="/processlist" render={(props) => <ProcessListPage {...props} user={state.user}  />}/>
      <Route exact path="/deliveredlist" render={(props) => <DeliveredListPage {...props} user={state.user}  />}/>
      <Route exact path="/profile" render={(props) => <ProfilePage {...props} user={state.user} setUser={setUser} />}/>
      
    </Switch>
</Fragment>
  )
}

export default AppRouter
