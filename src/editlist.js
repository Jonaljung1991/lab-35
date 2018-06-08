import React, { Component } from 'react';



class EditableList extends Component {
  render() {
    return (
      <div className="listdiv">
        <h2>List</h2>
            Enter some text:
            <input  type="text" className="inputfield"
            placeholder="enter text">
            </input>
            <button className="btnAddTxt">Add Text to List</button>
      </div>
    );
  }
}

export default EditableList;
