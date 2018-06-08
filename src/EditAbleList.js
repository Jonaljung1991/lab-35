import React, { Component } from 'react';
import List from './list';

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
        this.setState({
            newText: '',
            list: [...this.state.items,this.state.newText],
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
        </form>
        <List items={this.state.items}/>
    </div>
      );

  }

}
            
      

  



export default EditAbleList;