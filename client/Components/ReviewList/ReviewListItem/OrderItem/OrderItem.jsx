import React from 'react';
import OrderItemModal from './OrderItemModal/OrderItemModal.jsx';

import './orderItem.css';

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    let prices = ['3.25', '4.25', '5.25', '6.25', '7.25', '8.25', '9.25', '10.25', '11.25',
      '3.99', '4.99', '5.99', '6.99', '7.99', '8.99', '9.99', '10.99', '11.99',
      '12.99', '13.99', '14.99', '15.99',]
    let randomPrice = prices[Math.floor(Math.random() * prices.length)];

    return (
      <div className="orderItem-order" onClick={this.state.showModal ? () => {} : this.toggleModal}>
        <div className="orderItem-tooltip">{this.props.order} +
        <div className="orderItem-tooltiptext">
            <h6 className="orderItem-name">{this.props.order}</h6>
            <div className="orderItem-price">${randomPrice}+</div>
            <button className="orderItem-add">Add to bag</button>
          </div>
        </div>
        <OrderItemModal 
        price={randomPrice}
        name={this.props.order}
        open={this.state.showModal} 
        onClose={this.toggleModal}/>
      </div>
    )
  }
}

export default OrderItem;