Meteor.publish('software', function() {
  return Software.find();
});
Meteor.publish("user", function () {
    return Meteor.users.find({_id: this.userId});
});
Meteor.publish('qrCode', function() {
    return qrCode.find();
});
Meteor.publish('singleProduct', function(id) {
    return id && Product.find(id);
});