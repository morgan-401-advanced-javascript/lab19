import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
});

// Snapshot test
describe('App component', () => {
    it('renders correctly', () => {
        const page = renderer.create(<App />).toJSON();
        expect(page).toMatchSnapshot();
    });
});

describe('App Enzyme Testing', () => {
it('has a Converter Heading', () => {
    let component = mount(<App />);
    expect(component.find('div.App h1').text()).toBe(
        'Multi-Purpose Converter',
    );
});
});
// Test that three Converters are rendered on the page

describe('three Converters are rendered on the page', () => {
    // Test that the first converter is miles and kilometers
it('the first converter is miles and kilometers', () => {
    let component = mount(<App />);
    expect(component.find('div.App').childAt(1).find('h4').text()).toBe(
        'Converting Miles to/from Kilometers',
    );
});
    // Test that the second converter is cups and fluid ounces
it('the second converter is cups and fluid ounces', () => {
    let component = mount(<App />);
    expect(component.find('div.App').childAt(2).find('h4').text()).toBe(
        'Converting Cups to/from Fluid Ounces',
    );
});
    // Test that the third converter is inches and centimeters
it('the third converter is inches and centimeters', () => {
    let component = mount(<App />);
    expect(component.find('div.App').childAt(3).find('h4').text()).toBe(
        'Converting Inches to/from Centimeters',
    );
});
});
// Test that all three Converters properly convert to and from
xdescribe('all three Converters properly convert to and from', () => {
    // Test that the first converter is miles and kilometers
it('the first converter is miles and kilometers', () => {
    let component = mount(<App />);
    let miles = component.find('div.App').childAt(1).find('input#x');
    miles.simulate('change', 1);
    console.log(component.find('div.App').childAt(1).find('input#y'));
    expect(component.find('div.App').childAt(1).find('input#y')).toEqual(
        1.61
    );
});
    // Test that the second converter is cups and fluid ounces
it('the second converter is cups and fluid ounces', () => {
    let component = mount(<App />);
    expect(component.find('div.App').childAt(2).find('h4').text()).toBe(
        'Converting Cups to/from Fluid Ounces',
    );
});
    // Test that the third converter is inches and centimeters
it('the third converter is inches and centimeters', () => {
    let component = mount(<App />);
    expect(component.find('div.App').childAt(3).find('h4').text()).toBe(
        'Converting Inches to/from Centimeters',
    );
});
});