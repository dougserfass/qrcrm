// Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

// Generates: GET on /api/product
// and GET /api/product/:id
// for the Product Collection
Api.addCollection(Product, {
  excludedEndpoints: ['put', 'post', 'delete']
});