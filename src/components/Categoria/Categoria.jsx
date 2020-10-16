import React, { Component } from "react";
import "./estilo.css";

class Categoria extends Component {
  render() {
    return <li className="lista-categorias_item">{this.props.newCategory}</li>;
  }
}

export default Categoria;
