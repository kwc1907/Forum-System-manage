import Cookies from 'js-cookie'

const uToken = 'u_token'

// 获取Token
export function getToken() {
    return Cookies.get(uToken);
}


export function setToken(token) {
    return Cookies.set(uToken, token, {expires: 1})
}

// 删除Token
export function removeToken() {
    return Cookies.remove(uToken)
}

export function removeAll() {
    return Cookies.Cookies.removeAll()
}

