import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types'
import AppLayout from '../components/AppLayout';

function NodeBird({ Component }) {
  return (
    <>
    <Head>
    <title>NodeBird</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.3/antd.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.3/antd.js"></script>
  </Head>
  <AppLayout>
    <Component />
  </AppLayout>
  </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
}

export default NodeBird;
