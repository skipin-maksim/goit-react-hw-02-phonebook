import React from 'react';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function spinner() {
  return (
    <>
      <Loader
        className="spinner"
        type="Puff"
        color="#00BFFF"
        height={30}
        width={30}
      />
    </>
  );
}
