import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import './index.css';
import Icon from 'antd/lib/icon';
import axios from 'axios';
class Detail extends Component {
 constructor() {
    super();
    this.state = {
      Data: []
    }
  }
  componentDidMount() {
    var that = this;
    axios.get("/find/mobileList?tag_id=48&param_str=")
    .then(function(res){
      console.log(res);
      that.setState({
        Data: res.data.data
        
      })
    })
  }
  render() {
    return (
<<<<<<< HEAD:shihuo/src/Detail.js
      <div id="Detail">
=======
      <div className="Detail" id='Detail'>
>>>>>>> dcb378a7d7f8f59769b4a43f3a1d2d6eda4a7e99:shihuo/src/components/Detail/index.js
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
          <div className='detail'>
            {
               this.state.Data.map((item, index)=>{
                  return (
                    <div key={index} className='detail_div'>
                      <div className='top'>
                        <div className='left'><img src={item.data.avatar}alt='图片'/></div>
                        <div className='right'>
                          <p>{item.data.author_name}</p>
                          <div className='data'>{item.data.date}</div>
                        </div>
                      </div>
                        <div className='title'>{item.data.title}</div>
                        <img src={item.data.img} alt='图片' className='img1'/>
                        <div className='praise'><Icon type="heart-o" />{item.data.praise}</div>
                        <div className='ellipsis'><Icon type="ellipsis" />{item.data.reply_count}</div>
                    </div>
                  );
                })
            }   
          </div>
        </div>
      </div>
    );
   }
}

export default Detail;
