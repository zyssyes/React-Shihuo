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
          <div className='name'><Icon type="team" className='sml_icon'/><div type='text' placeholder='请输入用户名'></div></div>
          <div className='password'><Icon type="team" className='sml_icon'/><div type='password' placeholder='请输入密码'></div></div>
        </div>
        <div className='other-login'>

        </div>
      </div>
    );
   }
}

export default Regist;
