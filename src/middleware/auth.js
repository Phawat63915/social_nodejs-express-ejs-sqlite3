export function checkAuth() {
    return false
}

export function isAuth(req, res, next) {
    if (checkAuth()) {
        next()
    } else {
        res.redirect('/login')
    }
} 

export function isNonAuth (req, res, next) {
    if (!checkAuth()) {
        next()
    } else {
        res.redirect('/')
    }
}