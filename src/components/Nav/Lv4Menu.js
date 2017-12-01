import React, { Component } from 'react'
import { Menu, Icon, Button, Input  } from 'antd';
import { browserHistory } from 'react-router';

import styles from './less/LeftNav.less';

import {
  Link
} from 'react-router-dom'

export default class Lv3Menu extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
      collapsed : true
    }
  }

  componentWillMount(){
    
  }

  toggleMenu() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <li key={this.props.dataSource.id} className='v3menu-item'>
        <span className={this.state.collapsed ? 'v3menu-item-header' :'v3menu-item-header active'}  onClick={this.toggleMenu.bind(this)}>
          <strong>{this.props.dataSource.name}</strong>
          <Icon type={this.state.collapsed ? 'right' :'down'} />
        </span>
        <ul style={{display:this.state.collapsed ? 'none' :'block'}}>
        {
          this.props.dataSource.submenus && this.props.dataSource.submenus.map((j,k) => {
            return <li key={j.id} className='v3submenu-item'>
            <span>{j.name}</span>
          </li>
          })
        }
          
        </ul>
      </li>
    );
  }
}
