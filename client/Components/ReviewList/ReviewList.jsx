import React from 'react';
import ReviewListItem from './ReviewListItem/ReviewListItem.jsx';
import './reviewList.css';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortMethod: 'Most recent',
      numOfReviewsDisplayed: 5,
      showViewAllButton: true
    }
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleViewAllClick = this.handleViewAllClick.bind(this);
  }

  handleSortChange(e) {
    let sortMethod = e.target.value;
    this.props.sortReviews(sortMethod);
    this.setState({sortMethod})
  }

  handleViewAllClick(e) {
    e.preventDefault();
    this.setState({
      numOfReviewsDisplayed: Infinity,
      showViewAllButton: false
    })
  }

  render() {
    let viewAllButton;
    if (this.state.showViewAllButton === true) {
      viewAllButton = <button className="reviewList-viewAllButton" id="reviewList-viewAllButton" onClick={this.handleViewAllClick}>View all reviews</button>
    } else {
      viewAllButton = null;
    }
    let context = this;
    let reviews;
    
    if (this.props.reviewData) {
      reviews = this.props.reviewData.map(function (item, index) {
        if (index < context.state.numOfReviewsDisplayed) {
          return <ReviewListItem review={item} key={index} />
        }
      });
    }

    let restaurantName;
    if (this.props.restaurantData) {
      restaurantName = this.props.restaurantData.name;
    }


    return (
      <div>
        <div className="reviewList-main">
          <div className="reviewList-sort">
            <div className="reviewList-sortText">Sort by:</div>
            <div className="reviewList-select">
              <select className="reviewList-selectBox" onChange={this.handleSortChange}>
                <option value="Most recent">Most recent</option>
                <option value="Highest rated">Highest rated</option>
              </select>
              <img className="reviewList-dropdownArrow" src="https://s3-us-west-1.amazonaws.com/fechackreactor/grubhubDropdownArrow.png" alt="dropdownArrow"></img>
            </div>
          </div><br/>
            {reviews}
          <div className="reviewList-buttonContainer">
            {viewAllButton}
          </div>
          <div className="reviewList-bottom">
            <a className="reviewList-a" href="">Grubhub</a> / 
            <a className="reviewList-a" href="">Los Angeles</a> / 
            <a className="reviewList-a" href="">Santa Monica</a> / 
            <span className="reviewList-restaurantName">{restaurantName}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewList;