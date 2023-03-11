const products = [];

const getAddProduct = (req, res) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><label htmlFor="title">Title</label><input type="text" name="title" /><button type="submit">Add</button></form>'
  );
};

const postAddProduct = (req, res) => {
  console.log(req.body.title);
  products.push({ title: req.body.title });
  res.redirect("/");
};

const getProduct = (req, res) => {
  res.json({
    data: products,
    total: products.length,
  });
};

module.exports = {
  getAddProduct,
  postAddProduct,
  getProduct,
};
