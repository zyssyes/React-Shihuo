import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import './index.css';
import Icon from 'antd/lib/icon';
import axios from 'axios';
class User extends Component {
  render() {
    return (
      <div className="User" id='User'>
        <div className='top'>
          <div className='top_title'>
            <img src='../img/title.png' alt='图片' className='png1' />
              <p className='left'>登录</p>
              <p className='right'>注册</p>
              <p className='bottom'>金币 0</p>
          </div>
        </div>
          <div className="menu_list">
            <div className="tit"><span>我的识货</span></div>
              <ul>
                <li><img src="../img/1.png" alt=""/><p>我的收藏</p></li>
                <li><img src="../img/2.png" alt=""/><p>我的晒物</p></li>
                <li><img src="../img/3.png" alt=""/><p>我的礼品</p></li>
              </ul>
          </div>
          <div className="menu_list">
            <div className="tit"><span>我的海淘</span></div>
              <ul>
                <li><img src="../img/cart.png" alt=""/><p>购物车</p></li>
                <li><img src="../img/4.png" alt=""/><p>海淘订单</p></li>
                <li><img src="../img/5.png" alt=""/><p>海淘客服</p></li>
                <li><img src="../img/6.png" alt=""/><p>地址管理</p></li>
              </ul>
          </div>
          <div className="menu_list">
            <div className="tit"><span>识货必备</span></div>
              <ul>
                <li><img src="../img/7.png" alt=""/><p>推荐店铺</p></li>
                <li><img src="../img/8.png" alt=""/><p>装备鉴定</p></li>
                <li><img src="../img/9.png" alt=""/><p>黑科技选鞋</p></li>
              </ul>
            </div>
        
      </div>
    );
   }
}

export default User;
