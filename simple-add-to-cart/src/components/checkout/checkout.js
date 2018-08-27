import React from 'react';
import { connect } from 'react-redux';

class Checkout extends React.Component {
  render() {
    const { cart_items, employee } = this.props;
    if (!employee) return <div>Thank you</div>;
    return (
      <div>
        <h2> Thank you for employee: [{employee.employee.employeeId}]</h2>
        <ul>
          {cart_items.map((item) => (
            <li key={item.id}>{ item.heading }</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    employee: state.photos.employee,
    cart_items: state.photos.cart_items
  }
}

export default connect(mapStateToProps, null)(Checkout);