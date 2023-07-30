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
        <h1>Lorem Ipsum Content</h1>
        <LoremComponent fetchLorem={fetchLorem} /> {/* Pass the fetchLorem action creator as a prop */}
      </div>
    </Provider>
  );
};

export default App;




