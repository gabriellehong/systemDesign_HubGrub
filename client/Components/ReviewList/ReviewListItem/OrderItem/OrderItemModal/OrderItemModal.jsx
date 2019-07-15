import React from 'react'
import ReactDOM from "react-dom"
import './orderItemModal.css'

class OrderItemModal extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       quantity: 1,
    }

    this.quantityAdd = this.quantityAdd.bind(this);
    this.quantityMinus = this.quantityMinus.bind(this);
  }

  quantityAdd(){
    this.setState({quantity: this.state.quantity + 1})
  }

  quantityMinus(){
    this.setState({quantity: this.state.quantity - 1>0? this.state.quantity - 1: 0})
  }

render() {
  return (
    this.props.open ?
      ReactDOM.createPortal(
        <div className="orderItemModal-main">
          <table className="orderItemModal-container">
            <tbody>
              <tr>
                <td className="orderItemModal-td" valign="top">
                  <div className='orderItemModal-item'>
                    <p className='orderItemModal-content'>{this.props.name}<br />${this.props.price}</p>
                    <div className='orderItemModal-close' onClick={this.props.onClose}>&times;</div>
                  </div>
                  <div className='orderItemModal-quantity'>
                    <b>Quantity</b>
                    <span className="orderItemModal-addSubtract"  onClick={this.quantityMinus}> - </span>
                    <input className="orderItemModal-quantityInput" type="text" maxLength="2" value={this.state.quantity} />
                    <span className="orderItemModal-addSubtract" onClick={this.quantityAdd}> + </span>
                  </div>
                  <div className='orderItemModal-special'><b>Special Instructions</b><br></br>
                    <textarea className='orderItemModal-instruction' maxLength="400" placeholder="Dressing on the side? No pickles? Let us know here." ></textarea>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="orderItemModal-td" valign="bottom">
                  <div className='orderItemModal-addToBag'><button className='orderItemModal-button'>Add to bag: ${(this.props.price * this.state.quantity).toFixed(2)}</button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>,
        document.body
      )
      : null
  )
}
}

export default OrderItemModal;