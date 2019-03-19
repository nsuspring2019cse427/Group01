/**
 * addTodo
 *
 * @param {Array} list
 * @param {Object} item
 */
export const addTodo = (list, item) => [item, ...list]

/** 
 * generateId 
 *  
 */
export const generateId = () => Math.floor(Math.random() * 100000)