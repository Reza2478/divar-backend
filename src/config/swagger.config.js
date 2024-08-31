const swaggerJsDoc = require("swagger-jsdoc");
const swaggerJsUi = require("swagger-ui-express");

function SwaggerConfig(app) {
  const swaggerDocument = swaggerJsDoc({
    definition: {
      info: {
        title: "Divar API",
        version: "1.0.0",
        description: "API for managing divar advertisements",
      },
    },
    apis: [],
  });

  const swagger = swaggerJsUi.setup(swaggerDocument, {});
  app.use("/", swaggerJsUi.serve, swagger);
}

module.exports = SwaggerConfig;
