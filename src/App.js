import React from "react";
import { Provider } from "react-redux";
import store from './store/store'
import LoremIpsumDisplay from "./components/LoremComponent";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>A short Naration of Lorem Ipsum</h1>
        <LoremIpsumDisplay />
      </div>
    </Provider>
  );
};

export default App;





