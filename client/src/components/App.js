/* -- libs -- */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
/* -- custom components -- */
import ProtectedRoute from './ProtectedRoute';
import StreamList from './streams/StreamList/StreamList';
import StreamWatch from './streams/StreamWatch/StreamWatch';
import StreamCreate from './streams/StreamCreate/StreamCreate';
import StreamEdit from './streams/StreamEdit/StreamEdit';
import StreamDelete from './streams/StreamDelete/StreamDelete';
import Header from './Header/Header';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Switch>
          <ProtectedRoute path="/streams/live" component={StreamCreate} exact />
          <ProtectedRoute path="/streams/edit" component={StreamEdit} exact />
          <ProtectedRoute
            path="/streams/edit/:id"
            component={StreamEdit}
            exact
          />
          <ProtectedRoute
            path="/streams/delete"
            component={StreamDelete}
            exact
          />
          <ProtectedRoute
            path="/streams/delete/:id"
            component={StreamDelete}
            exact
          />
          <Route path="/streams/:id" component={StreamWatch} />} />
          <Route path="/streams" component={StreamList} />
          <Route path="/" exact component={StreamList} />
          <Redirect from="*" to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
