Meteor.publish('software', function() {
  return Software.find();
});
Meteor.publish("user", function () {
    return Meteor.users.find({_id: this.userId});
});
Meteor.publish('singleProduct', function(id) {
    return id && Product.find(id);
});
Meteor.publish('singleCase', function(id) {
    return id && Case.find(id);
});
Meteor.publish('productImport', function(options) {
    return ProductImport.find({}, options);
});
