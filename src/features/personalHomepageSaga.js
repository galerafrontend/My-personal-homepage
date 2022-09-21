import { takeLatest, call, put, delay } from "redux-saga/effects";
import { downloadRepositories } from "./PersonalHomepageAPI";
import { downloadRepositoriesError, downloadRepositoriesPending, downloadRepositoriesSucces } from "./personalHomepageSlice";

function* downloadRepositoriesHandler({ payload: username }) {
  try {
    yield delay(2000);
    const fetchRepositories = yield call(downloadRepositories, username);
    yield put(downloadRepositoriesSucces(fetchRepositories));
  } catch (error) {
    put(downloadRepositoriesError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(downloadRepositoriesPending.type, downloadRepositoriesHandler);
}