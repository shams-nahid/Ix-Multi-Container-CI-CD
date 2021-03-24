import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OtherPage from './OtherPage';
import Calc from './Calc';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Calc} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
