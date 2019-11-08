
import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

const View1 = lazy(() => import('./views/View1'));
const View2 = lazy(() => import('./views/View2'));

const Routes = () => {

    window.scroll({ top: 0, left: 0, behavior: 'smooth' });

    return (
        <BrowserRouter>
            <Suspense fallback={<h2>loading...</h2>}>
                <Switch>
                    <Route
                        path={'/view-1'}
                        render={() => <View1 />}
                    />
                    <Route
                        path={'/view-2'}
                        render={() => <View2 />}
                    />
                    <Redirect to={'/view-1'} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;
