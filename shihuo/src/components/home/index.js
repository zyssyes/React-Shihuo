import React,{Component} from 'react';
import "./index.css";
import { Tabs, Radio } from 'antd';
import { Carousel } from 'antd';

	
const TabPane = Tabs.TabPane;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }
  render() {
    const { mode } = this.state;
    return (
      <div id='home'>
      				<input id='search_input' type='text' placeholder='请输入产品名和商品名'/>
				<i className="iconfont cart">&#xe505;</i>

        <Tabs
          defaultActiveKey="1"
          tabPosition= "top"

        >
          <TabPane tab="精选" key="1">
          	 <div className='loop'>
                <Carousel autoplay>
                  <div><img src='http://shihuo.hupucdn.com/haitaoIndex/201711/2709/226cbe2eb4f71678eb3f68b2a45ccb1e.jpg' alt='图片' /></div>
                  <div><img src='http://shihuo.hupucdn.com/haitaoIndex/201711/1410/aae9adfaf5d5ed5b88bd8246c2207e1f.jpg' alt='图片' /></div>
                  <div><img src='http://shihuo.hupucdn.com/haitaoIndex/201711/2709/226cbe2eb4f71678eb3f68b2a45ccb1e.jpg' alt='图片' /></div>
                  <div><img src='http://shihuo.hupucdn.com/haitaoIndex/201710/2615/844ccfdd6385214a9ee429aa79c1fc8d.jpg' alt='图片' /></div>
                  <div><img src='http://shihuo.hupucdn.com/haitaoIndex/201711/2709/2ac6a236d8167d46a4a3697056c17070.jpg' alt='图片' /></div>
                </Carousel>
                <img id='img1'src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/haitao/images/hr_b09db04.png" alt="" />
                <img id='img2' src="http://shihuo.hupucdn.com/appHaitao/201711/2810/6b23d0d27b7eab474118380835ca9dc5.jpg?imageView2/2/w/750/h/350/interlace/1" alt=""/>
        	</div>
          </TabPane>
          <TabPane tab="户外运动" key="2">111</TabPane>
          <TabPane tab="休闲鞋服" key="3">11</TabPane>
          <TabPane tab="饰品手表" key="4">11</TabPane>
          <TabPane tab="饰品营销" key="5">11</TabPane>
          <TabPane tab="居家百货" key="6">111</TabPane>
          <TabPane tab="箱包手袋" key="7">11</TabPane>
          <TabPane tab="个人护理" key="8">111</TabPane>
          <TabPane tab="电脑数码" key="9">111</TabPane>
          <TabPane tab="其他分类" key="10">11111</TabPane>
        </Tabs>
      </div>
    );
  }
}
	





export default Home;