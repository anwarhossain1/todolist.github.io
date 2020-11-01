import React from 'react';
import { Component } from 'react';
import * as actions from './actions/index.js'
import {connect} from 'react-redux'

//import { Footer } from './components';
import { TodoAddForm, TodoList, TodoCount,Filter} from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoCount />
        <div className="Body">
          <TodoAddForm />
          <TodoList 
          filter={this.props.filter}/>
          <Filter filter={this.props.filter} setFilter={this.props.setFilter}/>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(actions.addTodo(text));
    },
    toggleTodo: id => {
      dispatch(actions.toggleTodo(id));
    },
    setFilter: filter => {
      dispatch(actions.setFilter(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// last er div ee ekta Footer chilo.