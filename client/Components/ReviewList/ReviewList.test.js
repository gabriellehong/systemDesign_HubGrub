import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReviewList from './ReviewList';

it('should render ReviewList component', ()=> {
	expect(shallow(<ReviewList />).length).toEqual(1)
})

it('should change state if button is clicked ', ()=> {
	let wrapper = shallow(<ReviewList />)
	expect.assertions(4);
	expect(wrapper.state().numOfReviewsDisplayed).toEqual(5);
	expect(wrapper.state().showViewAllButton).toEqual(true);
	wrapper.find("#reviewList-viewAllButton").simulate("click", { preventDefault () {} });
	expect(wrapper.state().numOfReviewsDisplayed).toEqual(Infinity);
	expect(wrapper.state().showViewAllButton).toEqual(false);
})