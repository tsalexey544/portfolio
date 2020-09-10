import React, { useState, useEffect } from 'react';
import {Form, Button} from 'react-bootstrap'

  
export default function Example() {  

    const [value, setValue] = React.useState(1);
    const handleInputChange = () => {
      setValue(value + 1)
    };

    useEffect(() => {
      document.title = `Вы нажали ${value} раз`;
      console.log("after")
    });
    return (
      <div className="App">
        <Button onClick={() => setValue(value + 1)}>Click {value}</Button> 
      </div>
    );
  }