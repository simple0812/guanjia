import React, { Component } from 'react'
import { Menu, Icon, Button, Input  } from 'antd';
import { browserHistory } from 'react-router';
import LvlMenu from './Lv1Menu';
import Lv3Menu from './Lv3Menu';

const Search = Input.Search;

import styles from './LeftNav.less';

const SubMenu = Menu.SubMenu;
import mockData from './mockdata';

import {
  Link
} from 'react-router-dom'

export default class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultKey:'Websites',
      collapsed: false,
      collapsedlv3: true,
      dataSource:mockData,
      selectedLv2Menu:{}
    }
  }

  initNav(navItems) {
  	var _this = this;
  	return navItems.map((o, i) => {
  		if(o.submenus && o.submenus.length) {
  			return <SubMenu key={'sub'+o.id} mode="inline" title={<span><Icon type="mail" /><span>{o.name}</span></span>}>
  			{ _this.initNav(o.submenus) }
        </SubMenu>
  		} else {
  			return <Menu.Item key={o.id}>
            <Icon type="pie-chart" />
            <span>{o.name}</span>
          </Menu.Item>
  		}
  	})
  }

  initMenu(navItems) {
    var _this = this;
    return navItems.map((o, i) => {
      return <LvlMenu selectedLv2Menu={this.state.selectedLv2Menu} key={o.id} dataSource={o} collapsed={_this.state.collapsed} onOpenlv3Menu={_this.openlv3Menu.bind(this)}/>
    })
  }

  menuClick({ item, key, keyPath }) {
  	console.log('onClick', item, key, keyPath)
  }

  menuSelect() {
  	console.log('onSelect')
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentWillMount(){
    
  }

  openChange(evt) {
  	console.log(evt)
  }

  openlv3Menu = (evt) => {
    console.log(evt)
    this.setState({
      collapsedlv3: false,
      selectedLv2Menu: evt
    });
  }

  collapsedlv3Menu= () => {
    this.setState({
      collapsedlv3: true
    });
  }

  togglelv1Menu() {
    
  }

  calcWidth() {
    if(this.state.collapsed && this.state.collapsedlv3)  {
      return 50;
    } else if ( this.state.collapsedlv3 && !this.state.collapsed) {
      return 200;
    } else if ( !this.state.collapsedlv3 &&  this.state.collapsed) {
      return 250;
    } else {
      return 400;
    }
  }

  render() {
    return (
      <div className='menuContainer' style={{ width: this.calcWidth()}}>
        <div className='menu-togglebox' style={{ left: this.state.collapsed ? 50 : 200}}>
          <Icon className='icon' type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}  onClick={this.toggleCollapsed}/>
        </div>
        <div className='menu' style={{ width: this.state.collapsed ? 50 : 200}}>
          <div style={{ textAlign:'center', width:'100%', marginTop:20, display:this.state.collapsed ? 'none' : 'block'}} >
            <img src='../../assets/images/biglogo.png' style={{ margin:'auto 10px'}} />
            <Search
              placeholder="查找菜单"
              className='searchcontainer'
              style={{ width: 180, background:'#1e2a38', margin:'30px 0' }}
              onSearch={value => console.log(value)}
            />
          </div>
          <div style={{ textAlign:'center', width:'100%', marginTop:10,display:this.state.collapsed ? 'block' : 'none'}} >
            <img src='../../assets/images/smalllogo.png' style={{ margin:'auto 10px'}} />
          </div> 
          
          <ul>
            {
              this.initMenu(this.state.dataSource)
            }
          </ul>
        </div>
        <Lv3Menu 
        collapsedlv3 ={this.state.collapsedlv3} 
        onCollapsedlv3Menu ={this.collapsedlv3Menu.bind(this)}
        collapsed={this.state.collapsed} 
        dataSource={this.state.selectedLv2Menu}/>
      </div>
    );
  }
}
