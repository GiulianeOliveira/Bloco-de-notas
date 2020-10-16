import React, { Component } from "react";
import "./estilo.css";

class SelectForm extends Component {
  render() {
    return (
      <select
        onChange={this.props.change}
        className="select"
      >
        <option>Selecione uma categoria</option>
        <option defaultChecked={true}>Sem Categoria</option>
        {this.props.categories.map((category, index) => {
          return <option key={index}>{category}</option>;
        })}
      </select>
    );
  }
}

export default SelectForm;
