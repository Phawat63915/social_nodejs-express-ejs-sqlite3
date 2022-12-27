export function checkAuth(req) {
    return req.session.user
}

export function isAuth(req, res, next) {
    if (checkAuth(req)) {
        next()
    } else {
        res.redirect('/login')
    }
} 

export function isNonAuth (req, res, next) {
    if (!checkAuth(req)) {
        next()
    } else {
        res.redirect('/')
    }
}