import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { removeToCart, proceedCheckout } from '../../actions/photosActions';
import { bindActionCreators } from 'redux';
import { Button, FormControl, InputLabel, Input } from '../../../node_modules/@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeId: ''
    }
    this.removeToCart = this.removeToCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      console.log(nextProps);
    }
  }

  removeToCart(photo, cart_items) {
    this.props.removeToCart(photo, cart_items);
    alert('Photo removed.');
  }

  handleChange(e) {
    this.setState({
      employeeId: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.proceedCheckout({
      employeeId: this.state.employeeId
    });
    this.props.history.push('/checkout');
  }

  render() {
    const { classes, cart_items } = this.props;

    if (cart_items.length == 0) {
      return (
        <div>
          <h1>
            No Items on cart
        </h1>
        </div>
      )
    }

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Photo Id</TableCell>
              <TableCell>Heading</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart_items.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.heading}</TableCell>
                  <TableCell>
                    <Button onClick={() => this.removeToCart(row, cart_items)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
        {/* Customer Details Form */}
        <form onSubmit={this.handleFormSubmit}>
          <FormControl margin="normal" required >
            <InputLabel>Employee ID</InputLabel>
            <Input onChange={this.handleChange} value={this.state.employeeId} name="Employee ID" />
          </FormControl>
          <Button color="secondary" type="submit">
            Proceed to Checkout
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart_items: state.photos.cart_items
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeToCart,
    proceedCheckout
  }, dispatch);
}

const cartWithStyles = withStyles(styles)(Cart);

export default connect(mapStateToProps, mapDispatchToProps)(cartWithStyles);
