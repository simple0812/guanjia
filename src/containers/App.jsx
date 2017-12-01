import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../redux/actions';

import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import LeftNav from '../components/Nav/LeftNav.js';
import TopNav from '../components/Nav/TopNav.js';
import Websites  from '../components/website/Websites';
import mockData from '../components/Nav/mockdata';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='layout-container'>
          <LeftNav dataSource={mockData} />
          <div className='content-container'>
            <TopNav />
            <p>contentxxx</p>
            <p>contentxxx</p>
            <p>contentxxx</p>
            <p>contentxxx</p>
          </div>
        </div>
      </Router>
    );
  }
}