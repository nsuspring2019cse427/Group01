import React from "react"
import Enzyme, {
    shallow
} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import TodoItem from "./TodoItem"

describe("TodoItem Component", () => {
    beforeAll(() => {
        Enzyme.configure({
            adapter: new Adapter()
        })
    })

    it("renders correctly", () => {
        const component = shallow( < TodoItem id = {
                1
            }
            title = "Do house chores" / > )
        expect(component).toMatchSnapshot()
    })
})