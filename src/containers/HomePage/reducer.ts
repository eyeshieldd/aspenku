import {
  ERROR_ACTION,
  RESET_ACTION,
  START_ACTION,
  SUCCESS_ACTION,
} from './constant'
import type { HomePageReducer, HomePageState } from './types'

export const defaultState: HomePageState = {
  loading: false,
  error: undefined,
  data: [],
  limit: 10,
  s: '',
}

export const reducer: HomePageReducer = (
  state = defaultState,
  action
): HomePageState => {
  switch (action.type) {
    case START_ACTION:
      return {
        ...state,
        ...action.payload,
        loading: true,
      }
    case SUCCESS_ACTION:
      return {
        ...state,
        loading: false,
        data: action.payload.new
          ? action.payload.data.data.rows
          : [...state.data, ...action.payload.data.data.rows],
      }
    case ERROR_ACTION:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    case RESET_ACTION:
      return {
        ...state,
        error: undefined,
      }
    default:
      return state
  }
}

export default reducer
