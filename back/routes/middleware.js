exports.isLoggedIn = (req, res, next) => {
  if(req.user) {
    next();
  } else {
    res.status(401).send('로그인이 필요합니다.')
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if(!req.user) {
    next();
  }
  res.status(401).send('이미 로그인 하셧습니다.')
}