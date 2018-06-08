import React, { Component } from 'react';

class EditAbleList extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
            list : [],
            newText: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({newText: e.target.value})
    }
    
    addTheText = (e) => {
        console.log(this.state.newText)
//        let theList = this.state.list
//        theList.push(this.state.newText)
        this.setState({newText: '',
                      list: [...this.state.list,this.state.newText]})
        
    }

  render() {
     let items = this.state.list.map(item => {
         return (<div>
                 <li>{this.state.newText}</li>
                </div>
             )
     })
      

    return (

      <div className="listDiv">

        <h2>List</h2>
            Enter some text:
            <input value={this.state.newText} onChange={this.handleChange} type="text" className="inputfield" placeholder="enter text">
            </input>

            <button className="btnAddTxt" onClick={this.addTheText}>Add Text to List</button>
            <div className="list">
                <ul>
                    {items}
                </ul>
                   
            </div>
      </div>

    );

  }

}



export default EditAbleList;