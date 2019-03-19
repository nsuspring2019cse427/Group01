import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FormInput = styled.input`
  width: 235px;
  outline: none;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
`

const TodoForm = props => {
  const { handleSubmit, handleOnchangeInput, currentTodo } = props

  return (
    <div>
      <p>Enter your todo and hit the Enter key </p>
      <form onSubmit={handleSubmit}>
        <FormInput placeholder="Enter new todo" onChange={handleOnchangeInput} value={currentTodo} />
      </form>
    </div>
  )
}

TodoForm.defaultProps = {
  currentTodo: '',
  handleSubmit: () => {},
  handleOnchangeInput: ()=>{}
}

TodoForm.propTypes = {
  currentTodo: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleOnchangeInput: PropTypes.func
}

export default TodoForm
