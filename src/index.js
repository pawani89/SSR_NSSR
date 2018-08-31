import React from 'react';
import {render} from 'react-dom';
import App from './App';
import getData from './fact';

getData().then(data =>{
    render(<App data={data} />, document.getElementById('root'));
})

