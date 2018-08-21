import React from 'react';

class MoviesList extends React.Component {

  constructor(props) {
    super(props);
  }

  renderMovies = (movies) => {
    if (!movies) return null;
    return movies.map((item, key) => {
      return (
        <div key={key}>
          {item.title}
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        {this.renderMovies(this.props.movies)}
      </div>
    )
  }
}

export default MoviesList;