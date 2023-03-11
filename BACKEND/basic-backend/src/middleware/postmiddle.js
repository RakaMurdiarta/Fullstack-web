const postMiddle = (req, res, next) => {
  console.log("middleware post");
  next();
};

module.exports = { postMiddle };
