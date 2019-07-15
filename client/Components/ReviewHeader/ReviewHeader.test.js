import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReviewHeader from './ReviewHeader';

it('should render ReviewHeader component', ()=> {
	expect(shallow(<ReviewHeader />).length).toEqual(1)
})