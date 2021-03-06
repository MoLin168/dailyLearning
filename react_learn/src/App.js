import React from 'react';
import logo from './logo.svg';
import './App.css';

//1.感受下JSX

//1.1一行代码直接写
const name = `ROSE`
const element = <h1>Hello, {name}!</h1>
const Messges = ['React', 'learn react', 'learn React good', 'learn React interested']
const numbers = [1,2,3,4,5]

//1.2多个dom，用()表示
// const elements = (
//   <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {element}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//   </div>
// )

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
    super(props)//React.prototype.constructor.call(this)
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

  //5.3组件更新后进行调用
  componentDidUpdate(prevProps) {
    //典型用法比较porps
    if (this.props.userID !== prevProps.userID) {
      //fetchData
    }
  }

  //5.4 在后代组件抛出错误后被调用
  componentDidCatch(error, info) {
    
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
    this.state = {isToggleOn: true}

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    //6.第一种事件点击写法 下面的handleclick这样写  handleClick() {//.....}
    // this.handleClick = this.handleClick.bind(this)
  }

  //事件点击 第二种写法 箭头函数
  handleClick = (event) => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render(h) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={(e) => this.handleClick(e)}>
            {this.state.isToggleOn ? 'ON': 'OFF'}
          </button>
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
          <Greeting isLoginIn={true} />
          <Mailbox unreadMessages={Messges}/>
          <Page />
          <NumberList numbers={numbers}/>
          <NameForm />
          <Single />
          <Double />
          <Fan2_extends />
        </header>
    </div>
    )
  }
}

//7.条件渲染
  class UserGreeting extends React.Component {
    render() {
      return <h1> Welcome back! </h1>
    }
  }

  class GuestGreeting extends React.Component {
    render() {
      return <h1> Please sign up! </h1>
    }
  }

  class Greeting extends React.Component {
    constructor(props) {
      super(props)
    }

    render(h) {
      console.log(this.props)
      const isLogined = this.props.isLoginIn
    
      if (isLogined) {
        return <UserGreeting />
      } 
      return <GuestGreeting />
    }
  }

//函数式编程 传参数
// function Greeting(props) {
//   const isLoginIn = props.isLoginIn

//   if (isLoginIn) {
//     return <UserGreeting /> 
//   }
//   return <GuestGreeting />
// }

//7.1 与运算符 &&  三目运算符
  class Mailbox extends React.Component {
    constructor(props) {
      super(props)
      this.unreadMessages = props.unreadMessages
    }
    render() {
      return (
        <div>
          {this.unreadMessages.length > 0 && 
          <h2>
            {this.unreadMessages.length === 3 ? this.unreadMessages.join('、') : this.unreadMessages.join('~')}
          </h2>
          }
        </div>
      )
    }
  }

//7.2 阻止组件渲染 通过render为null对已经渲染的组件进行隐藏

  function WarningBanner(props) {
    if (!props.warn) {
      return null
    }

    return <div>Warning</div>
  }

  class Page extends React.Component {
    constructor(props) {
      super(props)
      this.state = {showWarning: true}
    }

    handleToggleClick = (event) => {
      this.setState(state =>({
        showWarning: !state.showWarning
      }))
    }

    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning}/>
          <button onClick={this.handleToggleClick}>
            { this.state.showWarning ? 'Hide': 'Show' }
          </button>
        </div>
      )
    }
  }

  //8 key值的重要性
  function ListItem(props) {
    // 正确！这里不需要指定 key：
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // 正确！key 应该在数组的上下文中被指定
      <ListItem key={number.toString()} value={number} />
    );

    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  //9 表单form -input textarea select类似
  class NameForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {value: ''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    //异常点：箭头函数的写法这里打印event.target为null
    // handleChange = (event) => {
    //   console.log(event)
    //   // this.setState(state => ({
    //   //   value: event.target.value
    //   // }))
    // }
    handleChange(event) {
      this.setState({value: event.target.value})
    }

    // 异常点：箭头函数的写法这里打印event.target为null
    // handleSubmit = (event) => {
    //   console.log(`提交的名字是：${this.state.value}`)
    //   console.log(event)
    //   event.preventDefault();
    // }
    
    handleSubmit(event) {
      console.log(`提交的名字是：${this.state.value}`)
      event.preventDefault()
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            名字：
              <input  placeholder="请输入" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交"/>
        </form>
      )
    }
  }

  //10.1 组合 -包含关系
  function Fan(props) {
    console.log(props)
    return (
      <div className="top">
        {props.children}
      </div>
    ) 
  }

  //不完全通过children来控制
  function Fan2(props) {
    console.log(props)
    return (
      <div className="left-right">
        <div className="left">
          {props.left}
        </div>
        <div className="right">
          {props.right}
        </div>
      </div>
    )
  }

  function Single() {
    return (
      <Fan >
        <div className="slot1">我是插槽数据1</div>
        <p className="slot2">我是插槽数据2</p>
      </Fan>
    )
  }

  function Double() {
    return (
      <Fan2 
        left={<Left />}
        right={<Right />}
      />
    )
  }

  function Left() {
    return <div className="LeftComponent">LeftComponent</div>
  }

  function Right() {
    return <div className="RightComponent">RightComponent</div>
  }

  //10.2 组合 -特例关系
  function Fan2_extends() {
    return (
      <Fan2 left="title" right="info"/>
    )
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
