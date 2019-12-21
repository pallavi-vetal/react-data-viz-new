import React, { Component } from "react";
import Home from "./_components/Home";
import { Provider } from "react-redux";
import store from './store/store';

class App extends Component{

  render(){
    return (
      <Provider store={store}>
          <div>
            <Home />
          </div>
      </Provider>
      
     
    )
  }
}
export default App;