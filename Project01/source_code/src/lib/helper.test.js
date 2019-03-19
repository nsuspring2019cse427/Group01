import { addTodo } from './helper'

describe('addTodo', () => {
    it('should add todo to the list', () => {
        const startTodos = [
            { id: 1, name: 'one', isComplete: false },
            { id: 2, name: 'two', isComplete: false }
        ]

        const newTodo = { id: 3, name: 'three', isComplete: false }
        const expected = [
            { id: 3, name: 'three', isComplete: false },
            { id: 1, name: 'one', isComplete: false },
            { id: 2, name: 'two', isComplete: false }
        ]
        const result = addTodo(startTodos, newTodo)
        expect(result).toEqual(expected)
    })

    it('should not mutate the existing todo array', () => {
        const startTodos = [
            { id: 1, name: 'one', isComplete: false },
            { id: 2, name: 'two', isComplete: false }
        ]

        const newTodo = { id: 3, name: 'three', isComplete: false }

        const result = addTodo(startTodos, newTodo)

        expect(result).not.toBe(startTodos)
    })
})