import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import { configure } from 'enzyme';
import {shallow} from 'enzyme';
import TeamRank from './teamrank';
import store from '../../store';





describe('<TeamRank/>', () => {

it('Renders without crashing', () => {
    shallow(<Provider store={store}>
    	<TeamRank />
    	</Provider>);
    });
});