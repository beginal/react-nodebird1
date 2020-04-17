import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types'
import AppLayout from '../components/AppLayout';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducer/index';
import withRedux from 'next-redux-wrapper';

const NodeBird =({ Component, store }) => {
  return (
    <Provider store={store}>
    <Head>
    <title>NodeBird</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.3/antd.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.3/antd.js"></script>
  </Head>
  <AppLayout>
    <Component />
  </AppLayout>
  </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
}

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== ' undefined' ? __REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  )
  const store = createStore(reducer, initialState, enhancer)
  // 스토어 커스터마이징시
  return store;
})(NodeBird);
