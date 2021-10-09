import type { SagaIterator } from 'redux-saga'
import { load, Response } from './service'
import type { Product, ErrorAction, StartAction, SuccessAction } from './types'
import { put, call, takeLatest } from 'redux-saga/effects'
import { ERROR_ACTION, START_ACTION, SUCCESS_ACTION } from './constant'

export function* loadSaga({ payload }: StartAction): SagaIterator {
  const { data }: Response = yield call(load, payload)
  if (data) {
    yield put<SuccessAction>({
      payload: { data: data as Product },
      type: SUCCESS_ACTION,
    })
  } else {
    yield put<ErrorAction>({
      payload: { error: { Error: 'Something Wrong', Response: 'False' } },
      type: ERROR_ACTION,
    })
  }
}

export default function* saga(): SagaIterator {
  yield takeLatest(START_ACTION, loadSaga)
}
