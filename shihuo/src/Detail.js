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
          <div><Icon type="team" /><span></span></div>
          <div><Icon type="schedule" /></div>
          <div><Icon type="global" /></div>
          <div><Icon type="shake" /></div>
        </div>
      </div>
    );
  }
}

export default Detail;
