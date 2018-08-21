import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodo, updateTodo, clearTodo } from '../../actions/todoActions';
import {
  Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, Alert
} from 'reactstrap';

class TodoEdit extends React.Component {

  state = {
    todo: {
      name: '',
    },
    hasUpdated: false
  }

  // Life Cycle
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getTodo(id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.todo) {
      this.setState({ todo: nextProps.todo });
    }
    
    if (nextProps.updatedTodo != null) {
      this.setState({ todo: nextProps.updatedTodo});
      this.setState({ hasUpdated: true });
    }
  }

  componentWillUnmount() {
    this.props.clearTodo();
  }

  // Form Events
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.state.todo);
  }

  handleInputChange = (e, key) => {
    const newTodo = this.state.todo;
    newTodo[key] = e.target.value;
    this.setState({
      todo: newTodo
    });
  }

  render() {
    return (
      <div>
        { this.state.hasUpdated === true? 
          <Alert color="success">
            Todo Updated.
          </Alert>: null
        }
        <Card>
          <CardBody>
            <CardTitle>Edit Todo</CardTitle>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" placeholder="Enter Todo Name.." value={this.state.todo.name} onChange={(e) => this.handleInputChange(e, 'name')} />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos.todo,
    updatedTodo: state.todos.updatedTodo ? state.todos.updatedTodo: null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getTodo,
    updateTodo,
    clearTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit);