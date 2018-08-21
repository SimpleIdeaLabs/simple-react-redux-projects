import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getTodos, deleteTodo } from '../../actions/todoActions';
import { Table, Button, ButtonGroup } from 'reactstrap';


class TodoLists extends React.Component {

  componentWillMount() {
    this.props.getTodos();
  }

  handleDelete = (id) => {
    this.props.deleteTodo(id);
  }

  showTodos(todos) {
    if (!todos) return null;
    return todos.map((todo, key) => {
      return (
        <tr key={key}>
          <th scope="row">{todo.id}</th>
          <td>{todo.name}</td>
          <td>
            <ButtonGroup>
                <Link to={`/todos/${todo.id}/edit`}>
                  <Button>
                    Edit
                  </Button>
                </Link>
              <Button onClick={() => this.handleDelete(todo.id)} color="warning">Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { this.showTodos(this.props.todos) }
        </tbody>
      </Table>
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
    getTodos,
    deleteTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);