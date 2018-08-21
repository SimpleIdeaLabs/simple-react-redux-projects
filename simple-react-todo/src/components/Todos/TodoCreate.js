import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle
} from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createTodo, clearTodo} from '../../actions/todoActions';

class TodoCreate extends React.Component {

  state = {
    name: ''
  }

  // Life Cycle
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      if (nextProps.newTodo === true) {
        this.props.history.push('/todos');
      }
    }
  }  

  componentWillUnmount() {
    this.props.clearTodo();
  }

  // Form Events

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo({ ...this.state });
  }

  handleInputChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Todo Name</CardTitle>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" placeholder="Enter Todo Name.." onChange={(e) => this.handleInputChange(e, 'name')} />
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
    newTodo: state.todos.newTodo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    createTodo,
    clearTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreate);