const addUser = (req, res, next) => {
  res.send(
    "<form action='/admin/add-user' name='user' method='POST'><label htmlFor='user'>Name : </label><input type='text' /><button type='submit'>Add</button></form>"
  );
};

const postAddUser = (req, res) => {
  const user = { name: parseInt(req.body.name) };
  console.log(user);
  res.redirect("/users");
};

const getUsers = (req, res) => {
  console.log(req.method);
  res.send("Page Users");
};

module.exports = { addUser, postAddUser, getUsers };
