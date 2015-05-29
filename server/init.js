Meteor.startup(function () {
    if (Software.find().count() === 0) {
        Software.insert({name: "software1"});
    }
    if (Product.find().count() === 0) {
        Product.insert({
            id: "1",
            serialNumber: "serialNumber1",
            modelNumber: "modelNumber1",
            warrantyExpiryDate: "",
            url: ""
        });
    }
    if (Case.find().count() === 0) {
        Case.insert({
            number: "number1",
            name: "name1",
            phone: "phone1",
            email: "email1",
            message: "message1"
        });
    }
});