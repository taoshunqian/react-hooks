/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */

import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Home from '../view/Home';
import { RouterHSAE } from '../router';
import Error404 from '../view/error/404';

function Router(): JSX.Element {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div className="force-overflow">
        <Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <Home></Home>
              }
            >
            </Route>
            {
              RouterHSAE.map((router) => (
                RouterChildren(router)
              ))
            }
            <Route
              path="*"
              element={<Error404 />}
            >
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

function RouterChildren(props: any): any {
  return (
    props?.childern ? (
      <Route
        path={props.path}
        key={props.path}
      >
        {
          props.childern.map((item: any) => {
            const path = item.path.split('/')[item.path.split('/').length - 1];
            return (
              RouterChildren({ ...item, path })
            );
          })
        }
      </Route>
    ) : (
      <Route
        path={props.path}
        key={props.path}
        element={props?.component ? <props.component></props.component> : ''}
      >
      </Route>
    )
  );
}

export default Router;
