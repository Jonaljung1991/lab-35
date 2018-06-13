import React, { Component } from 'react';
import './App.css';


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
//       e.preventDefault()
        if(this.state.newText === '' ) {
            alert("Please enter a string to add to list")
        } else {
        let list = [...this.state.items]
        list.push(this.state.newText)
        this.setState({
            newText: '',
            items: list,
            
            });
      
        }
    }
    removeIt = (e,index) => {
        //let newList = this.state.items
        console.log(index)
        let list =  [...this.state.items];
        list.splice(index,1);
        this.setState({
            items: list
            
        })
        
    }
    
  render() {
  
      let list = this.state.items
      let list1 = list.map((item, index)=> {
          return <li key={index}>{item}<button className="btnRemove" onClick={(e) => this.removeIt(e,index)}>remove</button></li> 
      })
      

    return (
        

    <div className="listDiv">

    <h2>List</h2>

            <input value={this.state.newText} onChange={this.handleChange} type="text" className="inputfield" placeholder="enter text">
            </input>
            <button onClick= {this.onSubmit} className="btnAdd">Add Text to List</button>
        
            <div className="theList">
                <ul>
                    {list1}
                </ul>
            </div>
        
        
    </div>
      );

  }

}
            
      

  



export default EditAbleList;