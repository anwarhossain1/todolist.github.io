import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const todo = this.state.value.trim();
    event.preventDefault();

    if (!todo) return;

    this.setState({ value: '' });
    this.props.addTodo(todo);
  }

  render() {
    return (
      <form className="TodoAddForm" onSubmit={ this.handleSubmit } >
          <input placeholder="What need's to be done?"
            type="text" 
            value={ this.state.value } 
            onChange={ this.handleChange } 
          />
      </form>
    );
  }
}

export default connect(null, { addTodo })(TodoAddForm);