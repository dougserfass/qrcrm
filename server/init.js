Meteor.startup(function () {
    if (Software.find().count() === 0) {
        Software.insert({name: "software1"});
    }
    if (Product.find().count() === 0) {
        Product.insert({
            name: "name1",
            serialNumber: "serialNumber1",
            url: ""
        });
    }
});