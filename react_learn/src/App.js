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
class TimeShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    this.timer = null
  }

  //5.React 生命周期

  //5.1.在组件完成挂载到 DOM 后调用，在整个组件生命周期中只会被调用一次，获取 API 接口数据。
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  //组件的props或state发生变化时开始调用
  // shouldComponentUpdate (nextProps) {
  //   if (nextProps.someThings === this.props.someThings) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  //5.2 在组件完成解绑时开始调用
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  render(h1) {
    return <h2>now time {this.state.date.toLocaleTimeString()}</h2>
  }
}

class ReactTemplate extends React.Component {
  constructor(props) {
    super(props)
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
          {time}
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
const time = <TimeShow />
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
