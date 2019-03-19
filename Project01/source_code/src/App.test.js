import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapater()
});
import App from './App';

it('App renders without crashing', () => {
    const component = shallow( < App / > );
    expect(component.exists()).toEqual(true);

});