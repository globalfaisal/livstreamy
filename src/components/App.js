/* -- libs -- */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

/* -- custom components -- */
import StreamList from './streams/StreamList/StreamList';
import StreamWatch from './streams/StreamWatch/StreamWatch';
import StreamCreate from './streams/StreamCreate/StreamCreate';
import StreamEdit from './streams/StreamEdit/StreamEdit';
import StreamDelete from './streams/StreamDelete/StreamDelete';

const App = props => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/:id" component={StreamWatch} />} />
          <Route path="/streams" component={StreamList} />
          <Route path="/" exact component={StreamList} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
