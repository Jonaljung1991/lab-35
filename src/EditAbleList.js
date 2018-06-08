import React, { Component } from 'react';
import './App.css';
//import List from './list';

class EditAbleList extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
            newText: '',
            items : []
        }
    }
    
    handleChange = (e) => {
        this.setState({newText: e.target.value})
    }
    
    onSubmit = (e) => {
        console.log(this.state.newText)
        e.preventDefault()
        let list = [...this.state.items]
        list.push(this.state.newText)
        console.log(list)
        this.setState({
            newText: '',
            items: list,
            });
      
        }
    
  render() {
  
      

    return (
        

    <div className="listDiv">

    <h2>List</h2>
        <form className="theForm" onSubmit={this.onSubmit}>
            Enter some text:
            <input value={this.state.newText} onChange={this.handleChange} type="text" className="inputfield" placeholder="enter text">
            </input>
            <button>Add Text to List</button>
            <div className="theList">
                <ul>
                    <li>{this.state.items}</li>
                </ul>
            </div>
        </form>
        
    </div>
      );

  }

}
            
      

  



export default EditAbleList;