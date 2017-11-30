import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';
import { browserHistory } from 'react-router';

const SubMenu = Menu.SubMenu;

class SpecMenu extends Menu.Item {

}

import {
  Link
} from 'react-router-dom'

export default class LeftNavex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultKey:'Websites',
      collapsed: false,
      dataSource: [
      	{id: 1, name:'Option1', icon:'pie-chart', submenus:[]},
      	{id: 2, name:'Option2', icon:'pie-chart', submenus:[]},
      	{id: 3, name:'Option3', icon:'pie-chart', submenus:[]},
      	{id: 4, name:'Navigation One', icon:'pie-chart', 
      		submenus:[
      		{id: 41, name:'Option1', icon:'pie-chart', 
      			submenus:[
      				{id: 411, name:'Option411', icon:'pie-chart', submenus:[]},
      				{id: 412, name:'Option412', icon:'pie-chart', submenus:[]},
      				{id: 413, name:'Option413', icon:'pie-chart', submenus:[]},
      			]
      		},
	      	{id: 42, name:'Option42', icon:'pie-chart', submenus:[]},
	      	{id: 43, name:'Option43', icon:'pie-chart', submenus:[]},]
	      },
      	{id: 5, name:'Navigation Two', icon:'pie-chart', 
      		submenus:[
      		{id: 51, name:'Option51', icon:'pie-chart', 
      			submenus:[
      				{id: 511, name:'Option511', icon:'pie-chart', submenus:[]},
      				{id: 512, name:'Option512', icon:'pie-chart', submenus:[]},
      				{id: 513, name:'Option513', icon:'pie-chart', submenus:[]},
      			]
      		},
	      	{id: 52, name:'Option52', icon:'pie-chart', submenus:[]},
	      	{id: 53, name:'Option53', icon:'pie-chart', submenus:[]},]
	      },
      ]
    }
  }

  initNav(navItems) {
  	var _this = this;
  	console.log(navItems.length + 'abc');
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
    if(location.hash.length > 2) {
      this.state.defaultKey = location.hash.slice(2);
    } 
  }

  openChange(evt) {
  	console.log(evt)
  }

   // {
  // 	this.initNav(this.state.dataSource)
  // }
  render() {
    return (
      <div style={{ width: this.state.collapsed ? 100: 240, position:'fixed', top:'100px', zIndex:100 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          onOpenChange={this.openChange}
          onClick={this.menuClick}
          onSelect={this.menuSelect}
          inlineCollapsed={this.state.collapsed}

        >
 					 <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" mode="inline" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
         
        </Menu>
      </div>
    );
  }
}
