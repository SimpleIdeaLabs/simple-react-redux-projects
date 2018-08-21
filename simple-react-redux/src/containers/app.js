import React from 'react';
import { connect } from 'react-redux';
import { moviesList, directorsList } from '../actions';
import { bindActionCreators } from 'redux';
import MoviesList from '../components/moviesList';
import DirectorsList from '../components/directorsList';

class App extends React.Component {

  componentWillMount() {
    this.props.moviesList();
    this.props.directorsList();
  }

  renderDirectors = (directors) => {
    if (!directors) return null;

    return directors.map((director, key) => {
      return (
        <div key={key}>
          { director.name }
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <MoviesList movies={this.props.data.movies} />
        <DirectorsList directors={this.props.data.directors} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    moviesList,
    directorsList
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);