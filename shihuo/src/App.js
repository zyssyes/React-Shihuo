import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './components/home';
import Detail from './components/Detail';
import User from './components/user';
import './App.css';


const App = () => (
  <Router>
    <div id="botter">

      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route  path="/home" component={Home}/>
        <Route  path="/Detail" component={Detail}/>
        <Route  path="/topics" component={Home}/>
        <Route  path="/user" component={User}/>
      </Switch>


      <ul id='bot_ul'>
        <li ><NavLink activeClassName="bg" to="/home"><i className="iconfont">&#xe62b;</i><p>首页</p></NavLink></li>
        <li ><NavLink activeClassName="bg" to="/Detail"><i className="iconfont">&#xe6f4;</i><p>发现</p></NavLink></li>
        <li ><NavLink activeClassName="bg" to="/topics"><i className="iconfont">&#xe6a6;</i><p>精选</p></NavLink></li>
        <li ><NavLink activeClassName="bg" to="/user"><i className="iconfont">&#xe6a0;</i><p>我的</p></NavLink></li>
      </ul>
      

    </div>
  </Router>
)

export default App;
