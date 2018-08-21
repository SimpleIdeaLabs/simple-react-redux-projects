import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { artistDetail, clearArtistDetail } from '../actions/index';

class ArtistContainer extends Component {

  componentWillMount() {
    this.props.artistDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearArtistDetail();
  }

  render() {
    if (this.props.artist && !this.props.artist.artistData) return (<div></div>);
    let artist = this.props.artist.artistData[0];
    return (
      <div className="artist_view">
        <div className="artist_background" style={{
          background: `url(/images/${artist.cover})`
        }}>
          <Link to="/">
            Back home
                    </Link>
          <div className="name">{artist.name}</div>
        </div>
        <div className="artist_description">
          <p>{artist.bio}</p>
          <div className="tags">
            <div>
              <strong>Style:</strong> {artist.style}
            </div>
          </div>
        </div>
        <div className="artist_album_list">
          {artist.albums ?
            artist.albums.map(item => (
              <div key={item.cover} className="albums">
                <div className="cover" style={{
                  background: `url(/images/albums/${item.cover})`
                }}>
                </div>

              </div>
            ))
            : null
          }
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    artist: state.artists
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    artistDetail,
    clearArtistDetail
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);