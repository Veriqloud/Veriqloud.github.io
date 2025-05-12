window.onload = function() {
  const swaggerConfig = {
    url: "./openapi.yml",
    supportedSubmitMethods: [],
    dom_id: '#swagger-ui',
    deepLinking: false,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "BaseLayout",
  };

  // Initialize Swagger UI with the configuration
  window.ui = SwaggerUIBundle(swaggerConfig);
};
