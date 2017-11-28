import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/home';
import Detail from './components/Detail';
import './App.css';


const App = () => (
  <Router>
    <div id="botter">

      <Route exact path="/" component={Home}/>
      <Route path="/Detail" component={Detail}/>
      <Route path="/topics" component={Home}/>

      <ul id='bot_ul'>
        <li ><Link to="/"><i className="iconfont">&#xe62b;</i>首页</Link></li>
        <li ><Link to="/Detail"><i className="iconfont">&#xe6f4;</i>发现</Link></li>
        <li ><Link to="/topics"><i className="iconfont">&#xe6a6;</i>精选</Link></li>
        <li ><Link to="/topics"><i className="iconfont">&#xe6a0;</i>我的</Link></li>
      </ul>

    </div>
  </Router>
)

export default App;
