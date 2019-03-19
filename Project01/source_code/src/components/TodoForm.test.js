import React from 'react'
import Enzyme, {
    shallow
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoForm from './TodoForm'

describe('TodoForm Component', () => {
    beforeAll(() => {
        Enzyme.configure({
            adapter: new Adapter()
        })
    })

    it('renders correctly', () => {
        const component = shallow( < TodoForm / > )
        expect(component).toMatchSnapshot();
    })
})