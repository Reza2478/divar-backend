const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

function main() {
  const app = express();
  const port = process.env.PORT;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  require("./src/config/mongoose.config");

  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}

main();
