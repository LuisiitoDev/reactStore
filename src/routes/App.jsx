import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Page from '../containers';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Page.Home} />
                        <Route exact path="/checkout" component={Page.Checkout} />
                        <Route exact path="/checkout/information" component={Page.Information} />
                        <Route exact path="/checkout/payment" component={Page.Payment} />
                        <Route exact path="/checkout/success" component={Page.Success} />
                        <Route component={Page.NotFound} /> //THIS IS JUST WHEN A ROUTE REQUEST DOES NOT MATCH WITH THE REGISTER ROUTES
                </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;