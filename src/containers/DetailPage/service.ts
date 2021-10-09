import type { AxiosResponse } from 'axios'
import axios from './axios'
import type { Product, StartActionPayload, Error } from './types'

export type Response = AxiosResponse<Product | Error>

export type Payload = StartActionPayload

export const load = (params: Payload): Promise<Response> => {
  return axios.get(`/${params.i}`)
}
