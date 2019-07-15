import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Footer from './Footer';

it('should render Footer component', ()=> {
	expect(shallow(<Footer />).length).toEqual(1)
})