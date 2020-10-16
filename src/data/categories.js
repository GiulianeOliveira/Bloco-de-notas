export default class Categories {
  constructor() {
    this.categories = [];
    this._subscribers = []; // observar as mudanças de dados
  }

  register(func) {
    this._subscribers.push(func);
  }

  unsubscribe(func) {
    this._subscribers.filter(f => f !== func) // ????
  }

  notify() {
    // quando acontecer uma mudança ela notifica
    this._subscribers.forEach((func) => func(this.categories));
  }

  addCategory(newCategory) {
    this.categories.push(newCategory);
    this.notify();
  }
}
