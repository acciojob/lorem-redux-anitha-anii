// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import LoremComponent from './components/LoremComponent';
import { fetchLorem } from './store/actions';

const App = () => {
  return (
    <Provider store={store}>
      <div>
      <h1>A short Naration of Lorem Ipsum</h1>
        <ul>
        <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>
       <li><LoremComponent fetchLorem={fetchLorem} /></li>
        </ul>
      </div>
    </Provider>
  );
};

export default App;




