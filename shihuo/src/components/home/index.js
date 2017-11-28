import React,{Component} from 'react';
import "./index.css";
import { Tabs, Radio } from 'antd';
import { Carousel } from 'antd';
import axios from 'axios'
	
const TabPane = Tabs.TabPane;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
      showList:[]
    };
  }
  componentDidMount(){
  	var that = this;
  	axios.get("/haitao/list?r=0&page=1&page_size=20")
  		.then((res)=>{
  			console.log(res)
  			that.setState({
  				showList:res.data.data
  			})
  		})
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
                  <div><img src='../img/1.jpg' alt='图片' /></div>
                  <div><img src='../img/2.jpg' alt='图片' /></div>
                  <div><img src='../img/4.jpg' alt='图片' /></div>
                  <div><img src='../img/5.jpg' alt='图片' /></div>
                </Carousel>
                <img id='img1'src="../img/6.jpg" alt="" />
                <img id='img2' src="../img/7.jpg " alt=""/>
                <div className='show'>
                	{
                		this.state.showList.map((item,index)=>{
                			return(
                				<div key={item.id}>
                					<img src={item.img} />
                					<p>{item.title}</p>
                					<span>${item.price}</span><span>{item.business}</span>
                				</div>
                				)
                		})
                	}
                </div>
        	</div>
          </TabPane>
          <TabPane tab="户外运动" key="2">
          	<ul>
          		<li></li>
          	</ul>

          </TabPane>
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