import { shallow, mount, render } from 'enzyme';
import React from 'react';
import OrderItemModal from './OrderItemModal';

it('should render OrderItemModal component', ()=> {
	expect(shallow(<OrderItemModal />).length).toEqual(1)
})