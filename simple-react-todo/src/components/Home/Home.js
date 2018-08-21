import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos } from '../../actions/todoActions';

class Home extends React.Component {

  render() {
    return (
      <div>
        Home
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getTodos
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);