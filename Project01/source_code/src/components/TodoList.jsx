import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import TodoItem from "./TodoItem"

const StyledUl = styled.ul`
	padding: 0;
`

const TodoList = props => {
	const { todos } = props
	const content = todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.name} />)

	return <StyledUl>{content}</StyledUl>
}

TodoList.defaultProps = {
	todos: []
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object)
}

export default TodoList
