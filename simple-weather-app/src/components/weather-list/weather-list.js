import React from 'react';
import { connect } from 'react-redux';
import Chart from '../chart/chart';
import GoogleMap from '../google-map/google-map';
import { Grid, Paper, Table, TableHead, TableBody, TableRow, TableCell, withStyles } from '@material-ui/core';

const styles = theme => ({
  table: {
    minWidth: 1000
  },
  googleMapCell: {
    width: 200,
    height: 200
  }
});

class WeatherList extends React.Component {

  showWeatherListData(data, classes) {
    return data.map((weather, key) => {
      const tempData = weather.list.map(w => w.main.temp);
      const pressureData = weather.list.map(w => w.main.pressure);
      const humidityData = weather.list.map(w => w.main.humidity);
      const {lat, lon} = weather.city.coord;

      return (
        <TableRow key={key}>
          <TableCell className={classes.googleMapCell}>
            <GoogleMap lat={lat} lng={lon} cityName={weather.city.name}/>
          </TableCell>
          <TableCell>
            <Chart data={tempData} color="red" unit="k" />
          </TableCell>
          <TableCell>
            <Chart data={pressureData} color="orange" unit="hPa" />
          </TableCell>
          <TableCell>
            <Chart data={humidityData} color="blue" unit="%" />
          </TableCell>
        </TableRow>
      )
    })
  }

  render() {
    const {weather_list, classes} = this.props;
    if (weather_list.length <=0 ) return null;
    return (
      <Grid container justify="center">
        <Paper>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>City</TableCell>
                <TableCell>Temperature</TableCell>
                <TableCell>Pressure</TableCell>
                <TableCell>Humidity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.showWeatherListData(weather_list, classes)}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather_list: state.weather.list
  }
}

export default connect(mapStateToProps)(withStyles(styles)(WeatherList));