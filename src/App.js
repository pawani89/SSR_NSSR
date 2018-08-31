import React, { Component } from 'react';

import getData from './fact';

const App = (props)=> {
let data = this.props.data.map((item,i)=>{return(
<li>
         {item.text}
         </li>
 )})

    return (
      <ul className="App">
       {data}
      </ul>
    );
  
}

export default App;
