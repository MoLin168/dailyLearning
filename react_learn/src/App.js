import React from 'react';
import logo from './logo.svg';
import './App.css';

//1.感受下JSX

//1.1一行代码直接写
const name = `ROSE`
const element = <h1>Hello, {name}!</h1>

//1.2多个dom，用()表示
const elements = (
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {element}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div>
)

//2.组件形式 组件名称首字母要大写 类似下面原先的App

//2.1 函数组件
// function ReactTemplate() {
//   return elements
// }
//2.2 class组件写法
// class ReactTemplate extends React.Component {
//   render(h) {
//     return elements
//   }
// }

//3.props 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。


//4.state
class ReactTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  render(h) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {element}
          <h1>it is {this.state.date.toLocaleTimeString()}</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>
    )
  }
}

const el = <ReactTemplate />

//App就是一个组件 函数组件写法
// function App() {
//   return el
// }

class App extends React.Component {
  render(h) {
    return el
  }
}

export default App;
