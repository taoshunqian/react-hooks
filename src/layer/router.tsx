/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */

import { Route, Routes } from 'react-router-dom';
import { Suspense,useCallback } from 'react';
import Home from '../view/Home';
import { RouterHSAE } from '../router';
import Error404 from '../view/error/404';



function Router(): JSX.Element {

  const callback = useCallback(
    () => {
      return RouterHSAE.map((router) => (
        RouterChildren(router)
      ))
    },
    [],
  )

  return (
    
      <div>
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
                callback()
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
