/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */

import { Route, Routes } from 'react-router-dom';
import Home from '../view/Home';
import { RouterHSAE } from '../router';

function Router():JSX.Element {
  return (
  // className="scrollbar" id="style-3"
    <div style={{ width: '100%', height: '100vh' }}>
      <div className="force-overflow">
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
          >
          </Route>
        </Routes>
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
