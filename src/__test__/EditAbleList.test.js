import React from 'react';
import { shallow } from 'enzyme';
import EditAbleList from "../EditAbleList";

it("renders without crashing", () =>{
  let wrapper = shallow(<EditAbleList/>)
})

it("has an inputfield", () => {
    let wrapper = shallow(<EditAbleList/>)
    const input = <input 
    type="text" className="inputfield" placeholder="enter text">
    </input>
    expect(wrapper.exists(input)).toBe(true)
})

it("has a button", () => {
    let wrapper = shallow(<EditAbleList/>)
    const btn = <button className="btnAddTxt">Add Text to List</button>
    expect(wrapper.exists(btn)).toBe(true)     
})

it("has a list", () => {
    let wrapper = shallow(<EditAbleList/>)
    const list = <div className="list">
              <ul></ul></div>
    expect(wrapper.exists(list)).toBe(true)
})

test("Check initial list state" , () =>{
    let wrapper = shallow(<EditAbleList/>);
    expect(wrapper.state("newText")).toBe('');
})

test("check if input is string", () => {
    let wrapper = shallow(<EditAbleList/>);
    expect(wrapper.value(newText)).toBe("string");
})

//test("Check initial list state" , () =>{
// let wrapper = shallow(<EditAbleList/>);
// expect(wrapper.state("list")).toBe([]);
//})

