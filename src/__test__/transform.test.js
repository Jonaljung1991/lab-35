import React from "react";
import {shallow} from "enzyme";
import TransformText from "../tranformtext";

describe("Tranformtext component" , () =>{
it("renders without crashing", () =>{
  let wrapper = shallow(<TransformText/>)
})

test("Looking for the inputfield" , () =>{
  let wrapper = shallow(<TransformText/>);
  expect(wrapper.find(".transformInput")).toHaveLength(1);
})

test("Check initial input state" , () =>{
  let wrapper = shallow(<TransformText/>);
  expect(wrapper.state("inputValue")).toBe("");
})

test("Checking input onChange and state" , () =>{
  let wrapper = shallow(<TransformText/>);
   wrapper.find(".transformInput").simulate("change" , {target : {name:"inputValue",value : "hej"}});
  expect(wrapper.state("inputValue")).toEqual("hej");
})

test("Check initial reverseTextValue state" , () =>{
  let wrapper = shallow(<TransformText/>);
  expect(wrapper.state("reverseTextValue")).toBe("");
})

test("Checking reverseTextValue state" , () =>{
  let wrapper = shallow(<TransformText/>);
  wrapper.find(".transformInput").simulate("change" , {target : {name:"inputValue",value : "hej"}});
  expect(wrapper.state("inputValue")).toEqual("hej");
  expect(wrapper.state("reverseTextValue")).toEqual("jeh");
})

test("Checking reverseText output" , () =>{
  let wrapper = shallow(<TransformText/>);
  wrapper.find(".transformInput").simulate("change" , {target : {name:"inputValue",value : "hej"}});
  expect(wrapper.state("inputValue")).toEqual("hej");
  expect(wrapper.state("reverseTextValue")).toEqual("jeh");
  expect(wrapper.contains(<p>{wrapper.state("reverseTextValue")}</p>)).toBe(true);
})

test("Check initial upperCaseValue state" , () =>{
  let wrapper = shallow(<TransformText/>);
  expect(wrapper.state("upperCaseValue")).toBe("");
})

test("Checking upperCaseValue state" , () =>{
  let wrapper = shallow(<TransformText/>);
  wrapper.find(".transformInput").simulate("change" , {target : {name:"inputValue",value : "hej"}});
  expect(wrapper.state("inputValue")).toEqual("hej");
  expect(wrapper.state("upperCaseValue")).toEqual("HEJ");
})

test("Checking upperCaseValue output" , () =>{
  let wrapper = shallow(<TransformText/>);
  wrapper.find(".transformInput").simulate("change" , {target : {name:"inputValue",value : "hej"}});
  expect(wrapper.state("inputValue")).toEqual("hej");
  expect(wrapper.state("upperCaseValue")).toEqual("HEJ");
  expect(wrapper.contains(<p>{wrapper.state("reverseTextValue")}</p>)).toBe(true);
})

test("Check initial toThePowerOfValue state" , () =>{
  let wrapper = shallow(<TransformText/>);
  expect(wrapper.state("toThePowerOfValue")).toBe("");
})

test("Checking toThePowerOfValue state" , () =>{
  let wrapper = shallow(<TransformText/>);
  wrapper.find(".transformInput").simulate("change" , {target : {name:"inputValue",value : "5"}});
  expect(wrapper.state("inputValue")).toEqual("5");
  expect(wrapper.state("toThePowerOfValue")).toEqual("25");
})


test("Checking toThePowerOfValue output" , () =>{
  let wrapper = shallow(<TransformText/>);
  wrapper.find(".transformInput").simulate("change" , {target : {name:"inputValue",value : "5"}});
  expect(wrapper.state("inputValue")).toEqual("5");
  expect(wrapper.state("toThePowerOfValue")).toEqual("25");
  expect(wrapper.contains(<p>{wrapper.state("reverseTextValue")}</p>)).toBe(true);
})
})
