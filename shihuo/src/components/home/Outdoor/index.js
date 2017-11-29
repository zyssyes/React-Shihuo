import React,{Component} from 'react';
import Icon from 'antd/lib/icon';
import {
  Link
} from 'react-router-dom';
import './index.css'

export default class Outdoor extends Component{
	render(){
		return(
			<div id="outdoor">
				<ul className="top">
					<li><Icon type="global" /><p>运动用品</p></li>
					<li><Icon type="gift" /><p>运动鞋</p></li>
					<li><Icon type="skin" /><p>运动服饰</p></li>
					<li><Icon type="shake" /><p>户外装备</p></li>
					<li><Icon type="link" /><p>健身器材</p></li>
					<li><Icon type="laptop" /><p>运动装备</p></li>
					<li><Icon type="folder-open" /><p>户外鞋服</p></li>
				</ul>
				<img src="../../img/8.jpg" id='pic' />
				<div className='show'>
					{
						this.props.show.map((item,index)=>{
							return(
								<div key={item.id}>
									<Link to={'./goodsdetail/'+item.id+'/'+item.goods_id} >
										<img src={item.img} />
										<p>{item.title}</p>
										<span>${item.price}</span><span>{item.business}</span>
									</Link>
								</div>
								)
						})
					}
				</div>
			</div>
			)
	}
}


