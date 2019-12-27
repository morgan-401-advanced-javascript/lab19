import React from 'react';
import renderer from 'react-test-renderer';
import Converter from '../components/Converter';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
});

// Snapshot test
describe('Converter component', () => {
    it('renders correctly', () => {
        const page = renderer.create(<Converter />).toJSON();
        expect(page).toMatchSnapshot();
    });
});

describe('properly changes state', () => {
    it('Test that changing the x input field properly changes the state', () => {
        let component = mount(<Converter rate={1.5}/>);
        let xInput = component.find('input#x');
        xInput.simulate('change', {target: {id: 'x', value: 1}});
        expect(component.state('y')).toBe(1.5);
    });
    it('Test that changing the y input field properly changes the state', () => {
        let component = mount(<Converter rate={1.5}/>);
        let yInput = component.find('input#y');
        yInput.simulate('change', {target: {id: 'y', value: 3}});
        expect(component.state('x')).toEqual(2);
    });
    });


describe('Test that the component renders two input field', () => {
    it('Renders the first input fields', () => {
        let component = mount(<Converter />);
        expect(component.find('input#x').exists()).toEqual(true);
    });
    it('Renders the second input field', () => {
        let component = mount(<Converter />);
        expect(component.find('input#y').exists()).toEqual(true);
    });
    });
// Test that the labels are correctly set
describe('Test that the labels are correctly set', () => {
    it('The first label is correct ', () => {
        let component = mount(<Converter />);
        expect(component.find('label.x-label').text()).toBe(
            '1',
        );
    });
    it('The second label is correct ', () => {
        let component = mount(<Converter />);
        expect(component.find('label.y-label').text()).toBe(
            '1',
        );
    });
});
