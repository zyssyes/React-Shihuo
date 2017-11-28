import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import './Detail.css';
import Icon from 'antd/lib/icon';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <div className='loop'>
                <Carousel autoplay>
                  <div><img src='../img/loop1.jpg' alt='图片' /></div>
                  <div><img src='../img/loop2.jpg' alt='图片' /></div>
                  <div><img src='../img/loop3.jpg' alt='图片' /></div>
                  <div><img src='../img/loop4.jpg' alt='图片' /></div>
                  <div><img src='../img/loop5.jpg' alt='图片' /></div>
                </Carousel>
        </div>
        <div className='icon'>
          <div className='list'><Icon type="team" className='sml_icon'><span>众测</span></Icon></div>
          <div className='list'><Icon type="schedule" className='sml_icon'><span>栏目</span></Icon></div>
          <div className='list'><Icon type="global" className='sml_icon'><span>最新</span></Icon></div>
          <div className='list'><Icon type="shake" className='sml_icon'><span>最热</span></Icon></div>
        </div>
        <div className='title'>
          <strong><p>热门话题</p></strong>
          <div className='title_loop'>
            <div className='title_div'><img src='../img/title1.jpg' alt='图片' /><div className='opt'><p># 跑步鞋会丨晒晒你的装备美图 #</p></div></div>
            <div className='title_div'><img src='../img/title2.jpg' alt='图片' /><div className='opt'><p># 你型，你来晒！晒发型，送发油活动 #</p></div></div>
            <div className='title_div'><img src='../img/title3.jpg' alt='图片' /><div className='opt'><p># 爱拍也爱练 | 见证你的改变 #</p></div></div>
          </div>
        </div>
        <div className='all'>
          <ul>
            <li><a>全部</a></li>
            <li><a>实战推荐</a></li>
            <li><a>潮流穿搭</a></li>
            <li><a>球鞋90秒</a></li>
            <li><a>跑步有道</a></li>
            <li><a>测评档案</a></li>
            <li><a>数码</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Detail;
