import React, { Component } from "react";
import "./estilo.css";

class SubmitButton extends Component {
  render() {
    return (
      <button
        type="submit"
        className="form-cadastro_input form-cadastro_submit"
        onClick={this.props.handler}
      >
        {this.props.description}
      </button>
    );
  }
}

export default SubmitButton;
