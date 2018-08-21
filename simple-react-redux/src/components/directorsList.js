import React from 'react';

class DirectorsList extends React.Component {

  constructor(props) {
    super(props);
  }

  renderDirectors = (directors) => {
    if (!directors) return null;
    return directors.map((item, key) => {
      return (
        <div key={key}>
          {item.name}
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <h2>Directors</h2>
        {this.renderDirectors(this.props.directors)}
      </div>
    )
  }
}

export default DirectorsList;