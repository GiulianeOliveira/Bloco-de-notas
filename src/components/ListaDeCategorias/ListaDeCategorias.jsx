import React, { Component } from "react";
import "./estilo.css";
import Categoria from "../Categoria";
import SubmitButton from "../SubmitButton";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {
      categories: ['Testando'],
      hasErrorEmpty: false,
      hasErrorEqual: false,
      categoryValue: ""
    }; // Estado para testar erro nos classNames de input
    this._handlerEventInput = this._handlerEventInput.bind(this);
    this.newCategories = this.newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.register(this.newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this.newCategories);
  }

  newCategories(categories) {
    this.setState({ ...this.state.categories, categories }); // insere a categoria no select
  }

  _inputTest(inputContent) {
    this.setState({ hasErrorEmpty: false });
    this.setState({ hasErrorEqual: false });

    if (inputContent === "") {
      this.setState({ hasErrorEmpty: true });
      return false;
    }

    if (this.state.categories.includes(inputContent)) { // ver <---
      this.setState({ hasErrorEqual: true });
      return false;
    }
    return true;
  }

  _handlerEventInput(event) {
    event.preventDefault();
    //event.stopPropagation();
    const isValid = this._inputTest(this.state.categoryValue);
    if (isValid) {
      // Adiciona categoria na lista de categorias
      const categoryValue = this.state.categoryValue; // valor inserido no input
      this.props.addCategory(categoryValue);
      this.setState({ ...this.state.categories, categoryValue });
      this.setState( {...this.state.categoryValue, categoryValue: ''} )
    }
    //this.state.categoryValue = "";
    //this.setState({ ...this.state, categoryValue: "" });
    // alt shift f
  }
  _changeStyle() {
    return this.state.hasErrorEmpty || this.state.hasErrorEqual
      ? "red"
      : "black";
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categories.map((category, index) => {
            return <Categoria newCategory={category} key={index} />;
          })}
        </ul>
        <form onSubmit={this._handlerEventInput}>
          <input
            value={this.state.categoryValue}
            onChange={(event) =>
              this.setState({
                ...this.state,
                categoryValue: event.target.value,
              })
            }
            style={{
              borderColor: this._changeStyle(),
            }}
            type="text"
            className="lista-categories_input"
            placeholder="Informe a categoria"
          />
          <SubmitButton
            description="Enviar"
            handler={this._handlerEventInput}
          />
        </form>
        <span
          style={{
            color: this._changeStyle(),
          }}
          className={!this.state.hasErrorEmpty && "hidden"}
        >
          Mensagem vazia.
        </span>

        <span
          style={{
            color: this._changeStyle(),
          }}
          className={!this.state.hasErrorEqual && "hidden"}
        >
          A categoria já existe.
        </span>
      </section>
    );
  }
}

export default ListaDeCategorias;
