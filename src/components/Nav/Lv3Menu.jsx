import React, { Component } from 'react'
import { Menu, Icon, Button, Input  } from 'antd';
import { browserHistory } from 'react-router';

import styles from './LeftNav.less';
import Lv4Menu from './Lv4Menu';

import {
  Link
} from 'react-router-dom'

export default class Lv3Menu extends Component {
 

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    
  }

  initMenu(navItems) {
    var _this = this;
    if(!navItems) return;
    return navItems.map((o, i) => {
      return <Lv4Menu key={o.id} dataSource={o} />
    })
  }

  render() {
    return (
      <div className='v3menucontainer' 
        style={{ display: this.props.collapsedlv3 ? 'none' : 'block', left: this.props.collapsed ? 50 : 200 }}>
          <div style={{width:100, height:60, opcity:0}}></div>
          <img src='../../assets/images/ico/collapse.png' className='collapsedlv3-button' onClick={this.props.onCollapsedlv3Menu}/>
          <div className='v3menu'>
            <div className='v3menu-header'>
              <span >
                <Icon type={this.props.dataSource.icon} />
                <strong>{this.props.dataSource.name}</strong>
              </span>
            </div>

            <ul>
              {this.initMenu(this.props.dataSource.submenus)}
            </ul>
          </div>
        </div>
    );
  }
}
