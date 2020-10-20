import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import {
  getFirestore,
  createFirestoreInstance,
  reduxFirestore,
} from "redux-firestore";
import fbconfig from "./config/fbconfig";
import rootReducer from "./store/reducers/rootReducer";
import firebase from "firebase/app";
import "firebase/firestore";

// Redux thunk

const middlewares = [thunk.withExtraArgument({ getFirestore, getFirebase })];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), reduxFirestore(firebase))
);

const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
