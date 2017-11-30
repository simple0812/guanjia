import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';
import { browserHistory } from 'react-router';

import styles from './TopNav.less';


import {
  Link
} from 'react-router-dom'

export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
    if(location.hash.length > 2) {
      this.state.defaultKey = location.hash.slice(2);
    } 
  }

  render() {
    return (
      <div className='topnav' >
        <span className='topnav-addr'>武汉</span>
        <span className='topnav-temp'>20℃</span>
        <span className='topnav-date'>星期五</span>
        <span className='topnav-weather'>多云</span>
        <span className='topnav-wind'>北风2级</span>
        <span className='topnav-hint'>
          <img src='../../assets/images/hint.svg' alt='hint' />
          <div className='hint-box'>
            <ul>
              <li><span className='hint-line'></span><span className='hint-dot over'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-line'></span><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-line'></span><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-line'></span><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-line'></span><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
            </ul>
          </div>
          
        </span>
        <span className='topnav-fav'>
          <img src='../../assets/images/fav.svg' alt='fav' />
        </span>
        <span className='topnav-warning'>
          <img src='../../assets/images/warning.svg' alt='warning' />
        </span>
        <span className='topnav-user'>
          <div className='user-box'>
            <p className='user-info'>超级玛丽奥</p>
            <ul>
              <li className='active'><span>自定义主页</span></li>
              <li><span>个人信息</span></li>
            </ul>
            <p className='user-logout'>退出</p>
          </div>
        </span>
      </div>
    );
  }
}
