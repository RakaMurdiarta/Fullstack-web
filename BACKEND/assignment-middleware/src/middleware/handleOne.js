//1
exports.handleOneMd = (req, res, next) => {
  console.log(req.method);
  console.log("New Request");
  next();
  res.send("Processing Request");
};

//2

const id = [];
exports.handleParams = (req, res) => {
  console.log(req.params.id);
  id.push({
    id: req.params.id,
  });
  res.redirect("/post");
  // res.send('Product Successfully Add ')
};

exports.getParams = (req, res) => {
  res.json({
    data: id,
  });
};

//3
exports.queryParams = (req, res) => {
  res.send(` Text :  ${req.query.text}`);
};

exports.queryParamsMulti = (req, res) => {
  res.send(
    ` a :  ${req.query.a} + b : ${req.query.b} = ${
      parseInt(req.query.a) + parseInt(req.query.b)
    }`
  );
};
