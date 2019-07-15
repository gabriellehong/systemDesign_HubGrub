import { shallow, mount, render } from 'enzyme';
import React from 'react';
import OrderItem from './OrderItem';

it('should render OrderItem component', ()=> {
	expect(shallow(<OrderItem />).length).toEqual(1)
})