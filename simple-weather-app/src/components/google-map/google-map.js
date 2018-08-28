import React from 'react';

class GoogleMap extends React.Component {

  componentDidMount() {
    new window.google.maps.Map(this.refs.mapAnchor, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }

  render() {
    return (
      <React.Fragment>
        <div ref="mapAnchor" style={{ width: 200, height: 200 }}></div>
        <h4>{this.props.cityName}</h4>
      </React.Fragment>
    )
  }

}

export default GoogleMap;