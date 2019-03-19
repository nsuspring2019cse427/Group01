import React, { Component } from 'react'
import styled from 'styled-components'
import { generateId, addTodo } from '../lib/helper'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const Container = styled.div`
  width: 250px;
  margin: 10px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTodo: '',
      todos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnchangeInput = this.handleOnchangeInput.bind(this)
  }

  handleSubmit = evt => {
    evt.preventDefault()

    const { currentTodo, todos } = this.state

    const newTodo = { id: generateId(), name: currentTodo, isComplete: false }

    const updatedTodos = addTodo(todos, newTodo)

    this.setState({ todos: updatedTodos, currentTodo: '' })
  }

  handleOnchangeInput = evt => {
    this.setState({ currentTodo: evt.target.value })
  }

  render() {
    const { currentTodo, todos } = this.state
    return (
      <Container>
        <TodoForm
          currentTodo={currentTodo}
          handleSubmit={this.handleSubmit}
          handleOnchangeInput={this.handleOnchangeInput}
        />
        <TodoList todos={todos} />
      </Container>
    )
  }
}

export default App
