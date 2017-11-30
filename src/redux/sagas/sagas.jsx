import { takeLatest, takeEvery, select, put, call, fork, cps, take, cancelled } from 'redux-saga/effects';
import axios from 'axios';
import {
  loginFailureAction,
} from '../actions';

import {
  PAGE_WEBSITE,
  ADD_WEBSITE,
  EDIT_WEBSITE,
  DELETE_WEBSITES,
  pageWebsiteSuccess,
  addWebsiteSuccess,
  editWebsiteSuccess,
  deleteWebsitesSuccess,
  pageWebsite,
} from '../actions/website';

import mockData from './mockdata';

const getEntries = state => state.websites;
function* loginUserAsync() {
  console.log('loginUserAsync');
  yield put(loginFailureAction(Math.random() +''));
}

function* getPageWebsitesAsync(action) {
  // var p = yield axios.get('http://123.206.195.13:5555/api/v1/memo/page', {
  //   params : action.filter
  // })

  var p = yield call([axios, axios.get], 'http://123.206.195.13:5555/api/v1/memo/page', {
    params : action.filter
  })
  console.log(p, 'x');
  yield put(pageWebsiteSuccess(p.data));
}

function* addWebsiteAsync(action) {
  var p = yield axios.post('http://123.206.195.13:5555/api/v1/memo', action.entity)
  yield put(addWebsiteSuccess(p.data));
}

function* editWebsiteAsync(action) {
  var p = yield axios.put('http://123.206.195.13:5555/api/v1/memo', action.entity)
  yield put(editWebsiteSuccess(action.entity));
}

function* deleteWebsitesAsync(action) {
  var p = yield axios.delete('http://123.206.195.13:5555/api/v1/memo', {data: action.ids})
  console.log(p.data)
  yield put(deleteWebsitesSuccess(action.ids));
}

export default function* rootSaga() {
  yield [
    takeLatest(PAGE_WEBSITE, getPageWebsitesAsync),
    takeLatest(ADD_WEBSITE, addWebsiteAsync),
    takeLatest(EDIT_WEBSITE, editWebsiteAsync),
    takeLatest(DELETE_WEBSITES, deleteWebsitesAsync),
  ];
}
