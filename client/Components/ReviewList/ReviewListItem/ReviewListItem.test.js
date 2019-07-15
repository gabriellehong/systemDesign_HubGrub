import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReviewListItem from './ReviewListItem';

it('should render ReviewListItem component', ()=> {
	expect(shallow(<ReviewListItem />).length).toEqual(1)
})

it('should pass props correctly', ()=> {
	let fakeData = {"_id":"5ce474fb7413717579ce211e","Ordered":[],"user":{"firstName":"Silas","firstLetter":"S","numOfRatings":10,"topReviewer":false},"reviewID":1,"restaurantID":2,"starRating":1,"comments":"I hate this restaurant. I usually love Kimchi but they don't know how to make it the right way. I would not feed this to my dog.","date":"2018-09-05T09:11:40.594Z","__v":0};
	let wrapper = shallow(<ReviewListItem review={fakeData}/>);
	expect(wrapper.find("#reviewListItem-avatar").text()).toEqual("S");
})

