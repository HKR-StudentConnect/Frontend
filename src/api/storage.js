export function storeToken(token) {
  localStorage.setItem('token', token)
}

export function getToken() {
  return localStorage.getItem('token')
}

export function storeUserId(id) {
  localStorage.setItem('userId', id.toString())
}

export function getUserId() {
  return localStorage.getItem('userId')
}

export function handleTokenError() {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  window.location.href = '/login'
}

export const resetUser = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
}
