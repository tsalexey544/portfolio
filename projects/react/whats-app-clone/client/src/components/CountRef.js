import React, { useState, useRef, useEffect } from 'react';
import {Form, Button} from 'react-bootstrap'

  
export default function Example() {
    const count = useRef(0);
    const [currentValue, setCurrentValue] = useState(0)
  
    const handleClick = () => {

      console.log('handleClick', count.current)
      setCurrentValue(count.current)
      count.current += 1
      setCurrentValue(count.current * 10)
      setCurrentValue(0)


    };

    useEffect(() => {
      // setCurrentValue(count.current)

      console.log('useEffect', currentValue)
    });

    return (
      <div className="App">
        <Button onClick={handleClick}>Click {count.current} {currentValue}</Button> 
        {/* <Button onClick={}>Show value {count.current}</Button>  */}
      </div>
    );
  }