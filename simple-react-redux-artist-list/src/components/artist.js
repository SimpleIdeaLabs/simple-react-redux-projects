import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArtistContainer from '../containers/artistContainer';

class Artist extends Component {

  render() {
    return (
      <div className="artist_view">
        <ArtistContainer {...this.props} />
      </div>
    );
  }
};

export default Artist;