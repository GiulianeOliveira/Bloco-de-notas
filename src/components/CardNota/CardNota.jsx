import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as RemoveSVG} from "../../assets/remove.svg"

class CardNota extends Component {
  deleteNote(){
    const index = this.props.index
    this.props.deleteNote(index)
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
          <RemoveSVG onClick={this.deleteNote.bind(this)}/>
          <h4>{this.props.category}</h4>          
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota;
