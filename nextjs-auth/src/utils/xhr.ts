import axios, { AxiosPromise } from 'axios'

const xhr = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

interface ResultLogin {
  token: string
}

const createUser = <T>(params: T): AxiosPromise =>
  xhr.post('/auth/signup', params)

const login = <T>(params: T): AxiosPromise<ResultLogin> =>
  xhr.post('/auth/login', params)

const api = { createUser, login }

export default api
