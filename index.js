const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");

const app = express();

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(4004, () => {
  console.log("server running on port http://localhost:4004");
});
