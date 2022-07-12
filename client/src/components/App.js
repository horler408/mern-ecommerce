import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import store from './store';
import { loadUser } from './actions/authActions';
import { BrowserRouter } from 'react-router-dom';

function App() {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
