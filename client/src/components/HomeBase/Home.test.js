import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import Home from './home';
import {shallow} from 'enzyme';




describe('<Home />', () => {

it('Renders without crashing', () => {
    shallow(<Home />);
});

});