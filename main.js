const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/config/swagger.config");
const mainRouter = require("./src/app.routes")
const NotFoundHandler = require("./src/common/exception/not-found.handler");
const AllExceptionHandler = require("./src/common/exception/all-exception.handler")
const cookieParser = require("cookie-parser");

dotenv.config();

function main() {
    const app = express();
    const port = process.env.PORT;
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
    require("./src/config/mongoose.config");
    app.use(mainRouter)

    SwaggerConfig(app);
    NotFoundHandler(app);
    AllExceptionHandler(app);

    app.listen(port, () => {
        console.log(`listening on ${port}`);
    });
}

main();
