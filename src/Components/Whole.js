// Whole.js
import React from 'react';
import Header from './Header';
import Body from './Body';
import { Bg1 } from '../utils/constants';

const Whole = () => {
  return (
    <div
      className="bg-gray-900 lg:bg-contain lg:bg-no-repeat "
      style={{ backgroundImage: `url(${Bg1})` }}
    >
      <Header />
      <Body />
    </div>
  );
}

export default Whole;

