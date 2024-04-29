const isAuthenticated = (req, res, next) =>{
    if (!req.session) {
        res.status(400).json("You are not authenticated")
    }
    next();
}
module.exports = isAuthenticated;