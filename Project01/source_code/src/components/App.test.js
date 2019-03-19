import React from 'react'
import Enzyme, {
    shallow
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

describe('App Component', () => {
    beforeAll(() => {
        Enzyme.configure({
            adapter: new Adapter()
        })
    })

    it('renders correctly app.js ', () => {
        const component = shallow( < App / > )
        expect(component.exists()).toEqual(true);
    })
})