import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import Temp from './temp';
import {shallow} from 'enzyme';




describe('<Temp />', () => {

it('Renders without crashing', () => {
    shallow(<Temp/>);
});

});