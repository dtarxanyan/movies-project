import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            value: "",
        };
    }

    onChange = (e) => {
        this.setState({ value: e.target.value })
    };

    addItem = () =>{
        const obj = {
            name: this.state.value
        }
       if(this.state.value !== "" ){
        this.setState ({todos: this.state.todos.concat(obj)})
        this.setState ({value: ""})
       }
    }

  render() {
    const list = this.state.todos.map((todo) => (
        <li>{todo.name}
        <button>X</button>
        </li>
    ));

    return (
      <div className="App">
       <input placeholder='task' value={this.state.value} onChange={this.onChange} />
       <button onClick={this.addItem}>Add Item</button>
       <ul classname="list">
            {list}
       </ul>
      </div>
    )
  }
}

export default App;
