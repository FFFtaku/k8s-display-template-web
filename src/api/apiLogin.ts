import http from './request/http'

function postLogin() {
  return http.post('/login')
}

function postRegister(argu: object) {
  return http.post('/register', argu)
}

export {
  postLogin,
  postRegister
}