// Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

// Generates: GET on /api/Product
// and GET /api/Product/:id
// for the Product Collection
Api.addCollection(Product, {
  excludedEndpoints: ['put', 'post', 'delete']
});