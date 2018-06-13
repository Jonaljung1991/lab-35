import React from 'react';
import {
    shallow
} from 'enzyme';
import EditAbleList from "../EditAbleList";

it("It Renders without crashing", () => {
    let wrapper = shallow( <EditAbleList/> )
})


it("Has an inputfield", () => {
    let wrapper = shallow( <EditAbleList/> )
    const input = < input
    type = "text"
    className = "inputfield"
    placeholder = "enter text" >
        </input>
    expect(wrapper.exists(input)).toBe(true)
})

it("Has an addButton", () => {
    let wrapper = shallow( <EditAbleList/> )
    const btn = < button className = "btnAddTxt" > Add Text to List </button>
    expect(wrapper.exists(btn)).toBe(true)
})

it("Has a list", () => {
    let wrapper = shallow( < EditAbleList / > )
    const list = < div className = "list" >
        <
        ul > < /ul></div >
        expect(wrapper.exists(list)).toBe(true)
})

test("Has a removeButton", () => {
    let wrapper = shallow( <EditAbleList/> )
    wrapper.setState({
        newText: "hejsan",
        items: ["hejsan"]
    })
    expect(wrapper.find(".btnRemove")).toHaveLength(1)
})

test("Check initial newText state", () => {
    let wrapper = shallow( <EditAbleList/> );
    expect(wrapper.state("newText")).toBe('');
})

test("Check initial items state", () => {
    let wrapper = shallow( <EditAbleList/> );
    expect(wrapper.state("items")).toEqual([]);
})

test("Check newText state onChange" , () =>{
    let wrapper = shallow(<EditAbleList/>);
    wrapper.find(".inputfield").simulate("change" , {target : {name:"newText",value : "TryThis"}})
    expect(wrapper.state("newText")).toBe("TryThis");
})

test("Check items-state on click", () => {
    let wrapper = shallow(<EditAbleList/>);
    wrapper.find(".inputfield").simulate("change" , {target : {name:"newText",value : "testText"}})
    wrapper.find(".btnAdd").simulate("click")

    expect(wrapper.exists( <li>testText<button> remove </button></li> )).toBe(true)
    expect(wrapper.state("items")).toEqual(["testText"])
})

test("Check if input is a string", () => {
    let wrapper = shallow( <EditAbleList/> );
    expect(wrapper.find(".inputfield")).toHaveLength(1);
    wrapper.find(".inputfield").simulate('change', {
        target: {
            name: "newText",
            value: "abc"
        }
    })
    expect(wrapper.state("newText")).toEqual("abc")
})
