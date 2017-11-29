import React,{Component} from'react';
import axios from 'axios';
import { Carousel } from 'antd';
import Icon from 'antd/lib/icon';
import './index.css'

export default class GoodsDetail extends Component{
	constructor(){
		super(),
		this.state ={
			goodsInfor:null
		}
	}

  	componentDidMount(){
	  	var that = this;
	  	axios.get(`/app2/getDaigouSkuInfo?source=1&id=${this.props.match.params.fid}`)
	  		.then((res)=>{
	  			console.log(res)
	  			that.setState({
	  				goodsInfor:res.data.data.attr
	  			})
	  		})
	  }
	render(){
		// var items=this.state.goodsInfor ? this.state.goodsInfor.content.map((item,index)=>{
	 //                  		return(
	 //                  				<div key={item.gid}><img src={item.img}/></div>
	 //                  			 )
	 //                  	})
		// 			: null;
		var items=this.state.goodsInfor ? this.state.goodsInfor.content.map((item,index)=>{
	                  		return(
	                  				<div key={item.gid}><img src={item.img}/></div>
	                  			 )
	                  	})
					: null;
		var items2 = this.state.goodsInfor ? this.state.goodsInfor.content[0].price:null;
		return(
			<div id="goodsInfor">
				<header>
					<Icon type="left" id="left" onClick={()=>window.history.go(-1)}/>
					<span>商品详情</span>
					<Icon type="shopping-cart" id="right"/>
				</header>

				<div className='loop'>
	                <Carousel autoplay>
	                  {
	                  	items
	                  }
	                </Carousel>
	            </div>
	            <p>价格：<span>{items2}</span></p>
			</div>

			)
	}
}