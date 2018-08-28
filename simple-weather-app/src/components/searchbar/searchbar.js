import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../../actions/weather.action';
import { bindActionCreators } from 'redux';
import { Grid, FormControl, InputLabel, Input, Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: 'London'
    }
    this.onHandleSearch = this.onHandleSearch.bind(this);
    this.onHandleCityChange = this.onHandleCityChange.bind(this);
  }

  onHandleSearch(e) {
    e.preventDefault();
    this.props.getWeather(this.state.city);
    this.setState({
      city: ''
    });
  }

  onHandleCityChange(e) {
    this.setState({
      city: e.target.value
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid container justify="center">
        <form onSubmit={this.onHandleSearch}>
          <FormControl>
            <InputLabel htmlFor="name-simple">Name</InputLabel>
            <Input 
              type="text"
              value={this.state.city}
              placeholder="Enter City...."
              onChange={this.onHandleCityChange} />
          </FormControl>
          <Button 
            type="submit"
            variant="contained" 
            color="primary" 
            className={classes.button} 
            size="small">
            Search
          </Button>
        </form>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getWeather
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBar));