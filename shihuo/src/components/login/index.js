import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import './index.css';
import Icon from 'antd/lib/icon';
import axios from 'axios';
class Regist extends Component {
  render() {
    return (
      <div className="Regist" id='Regist'>
        <header className="common-header">
          <span>后退</span>
          <img src="https://passport.hupu.com/m/2/images/shihuo.png" alt=""/>
        </header>
        <div className='home-wrap'>
          <div className='name'><Icon type="user"  className='name-Icon'/><input type='text' placeholder='请输入用户名'/></div>
          <div className='password'><Icon type="lock" className='password-Icon'/><input type='password' placeholder='请输入密码'/></div>
          <div className="form-item-btn ">
            <input type="submit" value="注册" className="login-btn" dace-node="8000_login"/>
            <input type="submit" value="登录" className="regist-btn" dace-node="8000_login"/>
          </div>
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

