const getProducts = (req, res) => {
  res.status(200).send("Get all products");
};
const createProduct = (req, res) => {
  res.status(201).send("Products have been created");
};
const updateProduct = (req, res) => {
  res.status(200).send("Products have been updated");
};
const deleteProduct = (req, res) => {
  res.status(200).send("Products have been deleted");
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
