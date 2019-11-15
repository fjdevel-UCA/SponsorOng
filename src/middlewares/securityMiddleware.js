const securityMiddleware = {
  isLoggedIn: function(res, req, next) {
    if (req.session)
      return next();
    else return res.sendStatus(401);
  }
};
module.exports = securityMiddleware;
