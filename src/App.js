import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import LazyLoad from './Component/lazyload';
import ReactHookForm from './Component/ReactHookForm';
import Test from './Component/useEffect/useffect';
import TestCheckbox from './Component/useState/testCheckbox';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import FormComponent from './Component/TestGpt';
import ProvinceDistrictComponent from './Component/TestGpt';

function App() {
 

  return (
    <div>
      <ProvinceDistrictComponent />
    </div>
  );
}

export default App;
