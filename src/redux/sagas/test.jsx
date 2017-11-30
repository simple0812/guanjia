import { takeLatest, takeEvery, select, put, call, fork, cps, take, cancelled } from 'redux-saga/effects';
import axios from 'axios';
import Promise from 'bluebird'
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

function* testEvery(action) {
  yield Promise.delay(500);
  console.log('testEvery', action)
}

function* testLatest(action) {
  yield Promise.delay(500);
  console.log('testLatest', action)
}

function* testTake(action) {
  yield Promise.delay(500);
  console.log('testTake', action)
}

function* testFork(action) {
  yield Promise.delay(500);
  console.log('testFork', action)
}

export default function* rootSaga() {
  yield [
    take('TEST_TAKE', testTake),
    // fork('TEST_FORK', testFork),
    takeEvery('TEST_EVERY', testEvery),
    takeLatest('TEST_LATEST', testLatest),
  ];
}
