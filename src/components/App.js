import React from 'react';
import Converter from './Converter';
/**
 * This is the app that will render the HTML from Converter 
 * @function App
 */
function App() {
    return (
        <div className='App'>
            <h1>Multi-Purpose Converter</h1>
            <Converter xLabel='Miles' yLabel='Kilometers' rate={1.61} />
            <Converter xLabel='Cups' yLabel='Fluid Ounces' rate={8} />
            <Converter xLabel='Inches' yLabel='Centimeters' rate={2.54} />
        </div>
    );
}



export default App;
