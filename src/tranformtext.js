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

        if (typeof input[input.length - 1] === "string" && (isNaN(input[input.length - 1]))) {
            upperCase = input[input.length - 1].toUpperCase();
            this.setState({
                upperCaseValue: this.state.upperCaseValue + upperCase
            })
        }
        if (input === "") {
            this.setState({upperCaseValue: ""})
        }
    }

    toThePowerOf = (input) => {
        let newVal = "";
        if (!isNaN(parseInt(input[input.length - 1])) && isFinite(input[input.length - 1])) {
            newVal += (input[input.length - 1] * input[input.length - 1]);
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
