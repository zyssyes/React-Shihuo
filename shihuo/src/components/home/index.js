import React,{Component} from 'react';
import "./index.css";

class Home extends Component{
	render(){
		return (
			<div>
				<input type='text' placeholder='请输入产品名和商品名'/>
				<ul>
					<li >精选
						<ul>
							<li>111</li>
						</ul>
					</li>
			        <li >户外运动</li>
			        <li >休闲鞋服</li>
			        <li >饰品手表</li>
			        <li >饰品营养</li>
			        <li >居家百货</li>
			        <li >箱包手袋</li>
			        <li >个人护理</li>
			        <li >电猫数码</li>
			        <li >其他分类</li>
				</ul>
			</div>
			)
	}
}


export default Home;