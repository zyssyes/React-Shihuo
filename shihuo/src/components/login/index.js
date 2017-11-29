import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import './index.css';
import Icon from 'antd/lib/icon';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import  Login  from 'react-router'
class Regist extends Component {
 constructor(props){
      super(props);
      this.state = { 
          username: '',
          psw: ''
      }
  }
　stateChange(e){
　　   const target = e.target;
       this.setState({
           [target.name]: target.value
       })
　}
  saveUser() {
    const {
        username,
        psw
    } = this.state;
    if(!username) return alert('用户名不能为空');
    if(!psw) return alert('密码不能为空');
     axios.get(`/api/login?username=${this.state.username}&psw=${this.state.psw}`)
      .then((res)=>{
        console.log(res);
        if(res.data.code != 1) {
        alert(res.data.message);
          }
          else{
          this.props.history.push('/user')
          }

      })
}


  render() {
    return (
      <div className="Regist" id='Regist'>
        <header className="common-header">
          <Link to="/"><span>后退</span></Link>
          <img src="https://passport.hupu.com/m/2/images/shihuo.png" alt=""/>
        </header>

        <div className='home-wrap' onChange={(e)=>this.stateChange(e)}>
          <div className='name'>
            <Icon type="user"  className='name-Icon'/>
            <div   className='div_div'><input  className='input' type='text' placeholder='请输入用户名'  name="username" value={this.state.username} />
            </div>
          </div>
          <div className='password'>
            <Icon type="lock" className='password-Icon'/>
            <div    className='div_div' ><input className='input'  type='password' placeholder='请输入密码' name="psw" value={this.state.psw} />
            </div>
          </div>
            <Link to="/regist"><input  type="button" value="注册" className="login-btn" dace-node="8000_login" /></Link>
            <input   type="button" value="登录" className="regist-btn" dace-node="8000_login" onClick={()=>this.saveUser()} />
        </div>
        <div className="other-login">
          <i></i>
          <div className="other-login-one">
            <div  className="qq-login"><img src='../img/qq.png' alt=''/></div>
          </div>
          <i></i>
          <div className="other-login-two">
            <div className="phone-login"><img src='../img/phone.png' alt=''/></div>
          </div>
          <i></i>
        </div>
        <span className='span1'>QQ帐号登录</span>
        <span className='span2'>手机短信登录</span>
      </div>
    );
   }
}

export default Regist;
