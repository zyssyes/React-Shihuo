import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'


// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const router = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><NavLink to="/">精选</NavLink></li>
        <li><NavLink to="/">户外运动</NavLink></li>
        <li><NavLink to="/">休闲鞋服</NavLink></li>
        <li><NavLink to="/">饰品手表</NavLink></li>
        <li><NavLink to="/">饰品营养</NavLink></li>
        <li><NavLink to="/">居家百货</NavLink></li>
        <li><NavLink to="/">箱包手袋</NavLink></li>
        <li><NavLink to="/">个人护理</NavLink></li>
        <li><NavLink to="/">电猫数码</NavLink></li>
        <li><NavLink to="/">其他分类</NavLink></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default router