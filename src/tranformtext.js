import React, {Component} from "react";
class transformText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            reverseTextValue: "",
            upperCaseValue: "",
            toThePowerOfValue: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        }, () => {
            this.reverseText(this.state.inputValue);
            this.toUpperCaseText(this.state.inputValue);
            this.toThePowerOf(this.state.inputValue);
        })
    }
    toUpperCaseText = (input) => {
        let upperCase = "";
        for (let i = 0; i < input.length; i++) {
            if (typeof input[i] === "string" && (isNaN(input[i]))) {
                upperCase += input[i].toUpperCase();
            }
        }
        this.setState({upperCaseValue: upperCase})
        if (input === "") {
            this.setState({upperCaseValue: ""})
        }
    }

    toThePowerOf = (input) => {
        let newVal = "";
        for (let i = 0; i < input.length; i++) {
            if (!isNaN(parseInt(input[i])) && isFinite(input[i])) {
                newVal += input[i];
            }
        }
        if ((!input.match(/[a-z]/i)) && (input !== "")) {

            newVal = newVal * newVal;
            newVal = newVal.toString();
            this.setState({toThePowerOfValue: newVal})
        }
          this.setState({toThePowerOfValue: newVal})
    }

    reverseText = (input) => {
        let reverse = "";
        for (let i = input.length; i--; i > 0) {
            reverse += input[i];
        }
        this.setState({reverseTextValue: reverse});
    }
    render() {
        return (<div>
            <div>
                <h1>Transform your text here</h1><input className="transformInput" onChange={(e) => this.handleChange(e)} value={this.state.inputValue} type="text"/></div>
            <div className="reverse-text-container">
                <p>{this.state.reverseTextValue}</p>
            </div>
            <div className="to-upper-case-container">
                <p>{this.state.upperCaseValue}</p>
            </div>
            <div className="math-output-container">
                <p>{this.state.toThePowerOfValue}</p>
            </div>
        </div>)
    }
}

export default transformText;
