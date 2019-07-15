import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import App from './App';

describe('testing App component', ()=> {

	it('should render App component', () => {
		expect(shallow(<App />).length).toEqual(1)
	})

	it('should grab a snapshot of the component', ()=> {
		const tree = renderer
		  .create(<App />)
		  .toJSON();
		expect(tree).toMatchSnapshot();
	})

	it('should have default state as empty objects', ()=> {
		let wrapper = shallow(<App />);
		expect.assertions(2);
		expect(wrapper.state().reviewData).toEqual([]);
		expect(wrapper.state().restaurantData).toEqual({});
	})

	it('should render componentDidMount()', ()=> {
		let wrapper = mount(<App />);
		let instance = wrapper.instance();
		jest.spyOn(instance, 'getReviewsForRestaurantID');
		instance.componentDidMount();
		expect(instance.getReviewsForRestaurantID).toHaveBeenCalledTimes(1);
	})

	it('should sort by most recent', ()=> {
		let wrapper = mount(<App />);
		wrapper.instance().sortReviews('Most recent', [])
		expect(wrapper.state().reviewData).toEqual([]);
	})

	it('should sort by highest rated', ()=> {
		let wrapper = mount(<App />);
		wrapper.instance().sortReviews('Highest rated', [])
		expect(wrapper.state().reviewData).toEqual([]);
	})

	it('should sort by highest rated', ()=> {
		let wrapper = mount(<App />);
		let result = wrapper.instance().getRestaurantDataByRestaurantID([{"_id":"5ce474fb7413717579ce211e","Ordered":[],"user":{"firstName":"Silas","firstLetter":"S","numOfRatings":10,"topReviewer":false},"reviewID":1,"restaurantID":2,"starRating":1,"comments":"I hate this restaurant. I usually love Kimchi but they don't know how to make it the right way. I would not feed this to my dog.","date":"2018-09-05T09:11:40.594Z","__v":0}])
		expect(result).toEqual({ 
			id: 2,
			name: 'Lee\'s Kitchen',
			address: { 
				line1: '1893 E Tanner St',
				line2: 'Wileyburgh, LA 53498',
				milesAway: 1.56
			},
			phone: '(856) 264-0286',
			ratings: { 
				number: 466, 
				stars: 5, 
				good: 99, 
				timely: 91, 
				correct: 97 
			},
			schedule: {
				monFri: { delivery: '11:00am-8:30pm', pickup: '10:30am-10:30pm' },
				satSun: { delivery: 'Closed', pickup: 'Closed' }
			},
			image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/chicken-soup-1346310_1280.jpg',
			priceRange: 3,
			categories: [ 'Korean', 'Dinner', 'Soup', 'Salads' ] 
		});
	})

})