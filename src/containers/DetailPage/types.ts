import type { Action, Reducer } from 'redux'
import type { RootState } from 'store'
import type {
  ERROR_ACTION,
  RESET_ACTION,
  START_ACTION,
  SUCCESS_ACTION,
} from './constant'

export interface Error {
  readonly Response: string
  readonly Error: string
}

export interface Product {
  readonly name: string
  readonly description: string
  readonly sell_price: string
  readonly min_qty_order: string
  readonly weight: string
  readonly stock_on_hand: string
  readonly unit_measure: string
  readonly SpreeStore: {
    readonly store_name: string
  }
}

export interface StartActionPayload {
  readonly i: string
}

export interface StartAction extends Action<typeof START_ACTION> {
  readonly payload: StartActionPayload
}
export interface SuccessActionPayload {
  readonly data: Product
}

export interface SuccessAction extends Action<typeof SUCCESS_ACTION> {
  readonly payload: SuccessActionPayload
}

export interface ErrorActionPayload {
  readonly error: Error
}

export interface ErrorAction extends Action<typeof ERROR_ACTION> {
  readonly payload: ErrorActionPayload
}

export type ResetAction = Action<typeof RESET_ACTION>

export type DetailPageAction =
  | StartAction
  | SuccessAction
  | ErrorAction
  | ResetAction

export interface DetailPageState extends StartActionPayload {
  readonly loading: boolean
  readonly error?: Error
  readonly data?: Product
}

export interface DetailPageRootState extends RootState {
  readonly detailPage: DetailPageState
}

export type DetailPageReducer = Reducer<DetailPageState, DetailPageAction>
