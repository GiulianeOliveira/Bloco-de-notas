class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}

export default class ArrayNotes {
  constructor() {
    this.notes = [];
    this._subscribers = [] // observar as mudanças de dados
   
  }

  createNote(title, text, category) {
    const newNote = new Note(title, text, category);
    this.notes.push(newNote)
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1)
    this.notify();
  }

  register (func) {
    this._subscribers.push(func)
  }

  unsubscribe(func) {
    this._subscribers.filter(f => f !== func) // ????
  }

  notify () { // quando acontecer uma mudança ela notifica
    this._subscribers.forEach(func => func(this.notes))
  }
}

