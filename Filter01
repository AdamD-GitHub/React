import React, { Component } from "react";
import {Typography} from '@material-ui/core';

/*Need to define Filter - Three ways (from best to worst)
  - Lambda
  - Function
  - Class
*/ 

const Filter = (props) => {
    // get the body of the component 
    let text = props.children; 

    // make an array of the body
    let linesArray = text.split(/[.!?]/)  //looking line by line - regular expressions 
    //console.log(linesArray);

    // filter out lines from array to new array
    let filteredText = linesArray.filter( line => line.includes(props.lineContains ));
    //console.log('filteredText: ', filteredText);

    // wrap the lines with html - had to add index or was getting an error
    let wrappedLines = filteredText.map((line, index) => <p key={index}>{line}</p>);

    // return ready to render text
    return <Typography component = 'section'> {wrappedLines} </Typography>;
}

class App extends Component {
  render() {
    return (
      // the <></> are needed for a JSX fragment.
      <>
        <h1> Filter</h1>
        <Filter lineContains='test'>
            This is my search test area where I can look for certain words.  This is 
            only a test?  This is another line.  I'm not sure if the this test is working 
            correctly so I am typing a really long sentence. Who knows maybe it's just me.  
            But we can see if this test is working.
        </Filter>
      </>
     );
    }
  }

export default App;
