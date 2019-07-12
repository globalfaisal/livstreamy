/* -- libs -- */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

/* -- custom components -- */
import StreamList from './streams/StreamList/StreamList';
import StreamWatch from './streams/StreamWatch/StreamWatch';
import StreamCreate from './streams/StreamCreate/StreamCreate';
import StreamEdit from './streams/StreamEdit/StreamEdit';
import StreamDelete from './streams/StreamDelete/StreamDelete';
import Header from './Header/Header';

const App = () => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Switch>
            <Route path="/streams/live" component={StreamCreate} />
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/delete" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamWatch} />} />
            <Route path="/streams" component={StreamList} />
            <Route path="/" exact component={StreamList} />
            <Redirect from="*" to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
