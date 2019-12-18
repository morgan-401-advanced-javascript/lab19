import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

describe('', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
});

describe('App component', () => {
    it('renders correctly', () => {
        const page = renderer.create(<App />).toJSON();
        expect(page).toMatchSnapshot();
    });
});
// Snapshot test
// Test that three Converters are rendered on the page
// Test that the first converter is miles and kilometers
// Test that the second converter is cups and fluid ounces
// Test that the third converter is inches and centimeters
// Test that all three Converters properly convert to and from