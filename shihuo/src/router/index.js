import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import User from './components/user';
import Regist from './components/regist';
import Login from './components/login';
import GoodsDetail from './components/GoodsDetail';


const App = () => (
  <Router>
    <div id="botter">
        <Route  path="/user" component={User}/>
        <Route path="/regist" component={Regist}/>
        <Route path="/login" component={Login}/>
        <Route path="/goodsdetail/:fid/:gid" component={GoodsDetail} />
    </div>
  </Router>
)

export default App;
