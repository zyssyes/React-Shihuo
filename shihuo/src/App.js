import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <input type='text' placehold='请输入产品名或商品信息'/><i>小车</i>
          <ul>
            <li>精选</li>
            <li>户外运动</li>
            <li>休闲鞋服</li>
            <li>饰品手表</li>
            <li>饰品营养</li>
            <li>居家百货</li>
            <li>箱包手袋</li>
            <li>个人护理</li>
            <li>电猫数码</li>
            <li>其他分类</li>
          </ul>
        </div> 
      </div>
    );
  }
}

export default App;
