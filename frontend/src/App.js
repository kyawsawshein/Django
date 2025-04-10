// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { list };
  // }

  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios.get(
      'http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({todos: res.data });
    }).catch(err => {
      console.log(err);
    })
  }
  
  render() {
    return (
      <di>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </di>
    )
  }
}

export default App;
