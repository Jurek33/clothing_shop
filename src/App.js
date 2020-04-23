import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route 
            exact path='/signin' 
            render={() => 
                this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndRegisterPage />)
              }
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
