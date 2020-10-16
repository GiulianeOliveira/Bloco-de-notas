import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  constructor(){
    super();
    this.state = {notes:[]}
    this.newNotes = this.newNotes.bind(this);
  }
  componentDidMount(){
    this.props.notes.register(this.newNotes);
  }
  componentWillUnmount(){
    this.props.notes.unsubscribe(this.newNotes);
  }
  newNotes(notes){
    this.setState({...this.state,notes})
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notes.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                deleteNote={this.props.deleteNote}
                title={note.title}
                text={note.text}
                category={note.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
