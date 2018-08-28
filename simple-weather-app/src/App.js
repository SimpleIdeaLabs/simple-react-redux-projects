import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchbar/searchbar';
import WeatherList from './components/weather-list/weather-list';
import { Grid } from '@material-ui/core';

class App extends Component {

  render() {
    return (
      <Grid container>
        <Grid item xl={12} xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xl={12} xs={12}>
          <WeatherList />
        </Grid>
      </Grid>
    );
  }
}


export default App;
