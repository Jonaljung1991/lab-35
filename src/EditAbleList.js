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
        this.removeIt = this.removeIt.bind(this)
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
    removeIt = (event) => {
        console.log("Hej")
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
        </form>
            <div className="theList">
                <ul>
                    {this.state.items.map(function(leList,newText) {
                        return <li key={this.newText}>{leList}<button onClick={this.removeIt}>remove</button></li>
                    })}
                </ul>
            </div>
        
        
    </div>
      );

  }

}
            
      

  



export default EditAbleList;