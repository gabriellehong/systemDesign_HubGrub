const faker = require('faker');

let italianFoods = ['Cheese Pizza', 'Chicken Parmesan', 'Spaghetti and Meatballs', 'Garlic Bread',
  'Pasta with Pesto', 'Bread Sticks', 'Caesar Salad', 'Pepperoni Pizza', 'BBQ Pizza'];
let mexicanFoods = ['Fish Tacos', 'Chicken Tacos', 'Carne Asada Tacos',
  'Spicy Enchiladas', 'California Burrito', 'Shrimp Tacos', 'Fajita Salad Bowl', 'Veggie Bowl',
  'Steak Quesadilla', 'Nacho Platter', 'Taquitos'];
let chineseFoods = ['Chow Mein', 'Chicken Fried Rice', 'Orange Chicken', 'Teriyaki Chicken',
  'Wok-Fired Shrimp', 'Kung Pao Chicken', 'Veggie Egg Roll', 'Chicken Egg Roll', 'White Rice', 'Brown Rice',
  'Honey Walnut Shrimp'];
let burgerFoods = ['Cheeseburger', 'Hamburger', 'Cali Burger', 'Chili Cheeseburger',
  'Vegan Burger', 'Chicken Sandwich', 'French Fries', 'Onion Rings', 'Double Bacon Cheeseburger',
  'Veggie Burger', 'Black Bean Burger', 'Chicken Tenders', 'Southwest Chicken Salad'];
let koreanFoods = ['Bulgogi Beef', 'Galbi Chicken', 'Beef Short Ribs', 'Red Chicken',
  'Organic Tofu', 'Spicy Pork', 'Kimchi', 'Spicy Noodles', 'Kimchi Rice', 'Chicken Salad'];

let commentGenerator = (foodType, starRating) => {

  let randomFood1;
  let food;
  if (foodType === 'italian') {
    food = italianFoods;

  } else if (foodType === 'mexican') {
    food = mexicanFoods;
    randomFood1 = food[Math.floor(Math.random() * food.length)];
  } else if (foodType === 'chinese') {
    food = chineseFoods;
    randomFood1 = food[Math.floor(Math.random() * food.length)];
  } else if (foodType === 'burger') {
    food = burgerFoods;
    randomFood1 = food[Math.floor(Math.random() * food.length)];
  } else if (foodType === 'korean') {
    food = koreanFoods;
    randomFood1 = food[Math.floor(Math.random() * food.length)];
  }

  let positiveStart = ['I love eating from here! ', 'My family and I order from here twice a week. ',
    'I often order this on my lunch break. ', 'This is a great place to get a family dinner. ',
    'I have them cater my business meetings and my associates love it. ', 'Great for a quick bite. ',
    'They give you a lot of food for the price! ', 'Always on time! ', 'Never disappoints. ',
    'Best restaurant in town! ', 'I was able to use a great coupon. ', 'Awesome food here. ',
    'They always get my order right. ', 'Thank you for the extra side. '];
  let neutralStart = ['This place is just okay. ', 'We order from here every once in a while. ',
    'Food here is hit or miss. ', 'Some of the food is great. ', 'I like this place but dont order on Mondays. ',
    'Great for adults but not for kids. ', 'The food was good but they wont deliver alcohol. ',
    'They forgot to give me utensils or napkins. '];
  let negativeStart = ['I hate this restaurant. ', 'The delivery always takes 3 hours. ',
    'They cancelled my order after I was waiting for an hour! ', 'Prices here are outrageous. ',
    'They refuse to deliver because the chef thinks "his food is too good for delivery". ',
    'The food smells terrible every time. ', 'The staff was so rude! ',
    'I received my food late and it was as cold as ice. ', ' Garbage every time. '];

  let positiveMid = [`My favorite is the ${randomFood1}. `, `I ate the ${randomFood1} and it was to die for. `,
  `We ordered the ${randomFood1} and it was delivered right away. `, `I've never had ${randomFood1} that was so juicy. `,
  `The ${randomFood1} is always so fresh and great. `, `The chef's special is the ${randomFood1}. `,
  `You will never eat ${randomFood1} anywhere as good as they make it here. `,
  `The ${randomFood1} tastes great with some hot sauce. `,
  `I love the ${randomFood1}. It is the best thing on the menu. `,
  `Every time I order the ${randomFood1} I am reminded of my childhood when we would go camping, make a fire, and warm up some ${randomFood1}. `,
  `One time they gave me 3 extra orders of ${randomFood1} by accident. `,
  `We order the ${randomFood1} every week at my office and it's sooooo good. `];
  let neutralMid = [`The ${randomFood1} is good but everything else on the menu sucks. `,
  `If not for the half price ${randomFood1} special on Thursdays, I probably would not order from here. `,
  `My husband likes getting the ${randomFood1}. I'm not a huge fan. `,
  `I ate the ${randomFood1}. Not bad but nothing like the Cheesecake Factory. `,
  `They sent me a box of sushi when I really ordered ${randomFood1}, but they were nice enough to refund my order and give me free food. `,
  `The ${randomFood1} spilled out of the container. `];
  let negativeMid = [`There is so much salt in the ${randomFood1}. `, `There was a bug in my ${randomFood1}. `,
  `My son ate the ${randomFood1} and felt sick all night. `,
  `You could tell someone had eaten part of the ${randomFood1} before I got it. `,
  `I asked if the ${randomFood1} was made with dairy and the employee said no but there so much butter in it; I am lactose intolerant and I feel like I'm going to die. `,
  `I usually love ${randomFood1} but they don't know how to make it the right way. `,
  `The delivery man threw ${randomFood1} at my face. `,
  `One time I was there, someone spilled ${randomFood1} on the floor and it was there for 3 hours before they cleaned it. `];

  let positiveEnd = ['Would definitely recommend! Mmmmmm', 'I would give it 6 stars if I could.',
    'Cant wait to order this again soon!', 'Best food ive had in a while!', 'Now I know what food should taste like.',
    'My daughter even got a free dessert with her kids meal!', 'They were so nice they gave me a drink on the house.',
    'Five stars all the way!', 'Awesome service!', 'Loved it!', 'They deliver it so fast every time.'];
  let neutralEnd = ['I just wish they knew how to pack soup properly.', 'There are better options if you have time.',
    'It is too busy most nights.', 'The food was great but it took way too long.',
    'It was better than I expected, but not great.', 'They forgot my drink.', 'Meh.'];
  let negativeEnd = ['I will never eat from here again!.', 'We will be reporting this restaurant to the BBB and FDA.',
    'Someone is going to get sick eating here.', 'AVOID AT ALL COSTS!!', 'Order from the place next door instead.',
    'I will be pursuing legal action immediately.', 'Im still hungry!', 'I think I may throw up.',
    'I would rather eat a hot dog at 7/11', 'They never get my order right.',
    `I tried calling the restaurant but their phone didn't work.`, 'I would not feed this to my dog.', 'Never again!',
    'Every time I ask for extra sauce they put a note in my order that says "We are out of sauce till October".'];

  let comment = '';
  let startPhrase;
  let midPhrase;
  let endPhrase;


  if (starRating === 4 || starRating === 5) {
    startPhrase = positiveStart[Math.floor(Math.random() * positiveStart.length)];
    midPhrase = positiveMid[Math.floor(Math.random() * positiveMid.length)];
    endPhrase = positiveEnd[Math.floor(Math.random() * positiveEnd.length)];
  } else if (starRating === 3) {
    startPhrase = neutralStart[Math.floor(Math.random() * neutralStart.length)];
    midPhrase = neutralMid[Math.floor(Math.random() * neutralMid.length)];
    endPhrase = neutralEnd[Math.floor(Math.random() * neutralEnd.length)];
  } else if (starRating === 2 || starRating === 1) {
    startPhrase = negativeStart[Math.floor(Math.random() * negativeStart.length)];
    midPhrase = negativeMid[Math.floor(Math.random() * negativeMid.length)];
    endPhrase = negativeEnd[Math.floor(Math.random() * negativeEnd.length)];
  }

  comment += startPhrase;
  comment += midPhrase;
  comment += endPhrase;
  return comment;
}

let restaurantID = 1;

let generateFakeData = (num, idcounter) => {
  let fakeData = [];
  let restaurantID = Math.floor(Math.random() * 10000) + 1;

  let instance = {};

  let starRating = Math.ceil(Math.random() * 5);
  let date = faker.date.past();

  let foodType;
  let food;
  if (restaurantID >= 1 && restaurantID <= 2000) {
    foodType = 'korean';
    food = koreanFoods;
  }
  else if (restaurantID >= 2001 && restaurantID <= 4000) {
    foodType = 'mexican';
    food = mexicanFoods;
  }
  else if (restaurantID >= 4001 && restaurantID <= 6000) {
    foodType = 'chinese';
    food = chineseFoods;
  }
  else if (restaurantID >= 6001 && restaurantID <= 8000) {
    foodType = 'italian';
    food = italianFoods;
  }
  else if (restaurantID >= 8001 && restaurantID <= 10000) {
    foodType = 'burger';
    food = burgerFoods;
  }

  let reviewID = Math.floor(Math.random() * 10000000) + 1;


  let comments = commentGenerator(foodType, starRating);
  restaurantID = idcounter;

  instance.reviewID = reviewID;
  instance.restaurantID = restaurantID;
  instance.restaurantRating = starRating;
  instance.review = comments;
  instance.type = foodType;
  instance.date = date;

  return instance;
}


module.exports = generateFakeData;