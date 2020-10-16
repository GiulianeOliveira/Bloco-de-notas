import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "../src/components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categories from "./data/categories";
import ArrayNotes from "./data/notes";

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories()
    this.notes =  new ArrayNotes()
    // App.js é nosso componente Statefull, ou seja, gerencia os estados
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categories={this.categories}
          createNote={this.notes.createNote.bind(this.notes)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <ListaDeNotas
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;


  /*createNote(title, text, category) {
    const newNote = { title, text, category };
    const newNoteArray = [...this.state.notes, newNote];
    const newState = { notes: newNoteArray };
    this.setState(newState); //seta um novo estado pra pag renderizar
  }

  deleteNote(index) {
    let array = this.state.notes;
    array.splice(index, 1);
    this.setState({ notes: array });
  }
  addCategory (categoryValue) {
    //categoryValue
    const newCategoryArray = [...this.state.categories, categoryValue];
    const newState = { categories: newCategoryArray };
    this.setState(newState);
  }*/