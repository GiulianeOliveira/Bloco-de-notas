import React, { Component } from "react";
import "./estilo.css";
import SubmitButton from "../SubmitButton";
import SelectForm from "../SelectForm";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Sem categoria";
    this.state = { categories: [] };

    this.newCategories = this.newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.register(this.newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this.newCategories);
  }
  newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _handleMudancaCategoria(event) {
    event.stopPropagation();
    if (event.target.value !== "Selecione uma categoria") {
      this.category = event.target.value;
    }
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
    this.category = "Sem categoria"; //Default
    this.title = "";
    this.text = "";
  }

  cleanInput() {
    const form = document.querySelector(".form-cadastro");
    if (form) {
      form.reset();
    }
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
        <SelectForm
          change={this._handleMudancaCategoria.bind(this)}
          categories={this.state.categories}
        />
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <SubmitButton description="Criar Nota" handler={this.cleanInput} />
      </form>
    );
  }
}

export default FormularioCadastro;
