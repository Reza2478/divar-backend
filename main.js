const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/config/swagger.config");
dotenv.config();

function main() {
  const app = express();
  const port = process.env.PORT;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  require("./src/config/mongoose.config");
  SwaggerConfig(app);

  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}

main();
