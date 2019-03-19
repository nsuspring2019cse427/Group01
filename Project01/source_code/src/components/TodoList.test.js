import React from 'react'
import Enzyme, {
    shallow
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoList from './TodoList'

describe('TodoList Component', () => {
    beforeAll(() => {
        Enzyme.configure({
            adapter: new Adapter()
        })
    })

    it('renders correctly', () => {
        const component = shallow( < TodoList / > )
        expect(component).toMatchSnapshot()
    })
})