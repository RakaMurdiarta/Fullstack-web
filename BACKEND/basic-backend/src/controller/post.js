const post = (req, res) => {
  res.send(
    '<form action="/add-product/post" method="POST"><label htmlFor="title"> Title</label><input type="text" name="title" /><label htmlFor="desc">Description</label><input type="text" name="desc" /><button type="submit">Add</button></form>'
  );
};

const posting = (req, res) => {
  console.log('posting');
  res.redirect("/");
};

module.exports = { post, posting };
