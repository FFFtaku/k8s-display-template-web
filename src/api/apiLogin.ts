import http from './request/http'

interface PostLogin {
  Username: string,
  Password: string
}
function postLogin(argu: PostLogin) {
  return http.post('/login', argu)
}

interface PostRegister {
  Username: string,
  Password: string,
  Role: string,
  Path: string
}
function postRegister(argu: PostRegister) {
  return http.post('/register', argu)
}

export {
  postLogin,
  postRegister
}