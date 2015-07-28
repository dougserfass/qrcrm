Meteor.startup(function () {
    if (Software.find().count() === 0) {
        Software.insert({name: "software1"});
    }
    if (Product.find().count() === 0) {
        Product.insert({
            oemSerialNumberId: "oemSerialNumberId1",
            itemId: "itemId1",
            name: "name1",
            customerId: "customerId1",
            customerName: "customerName1",
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
    if (ProductImport.find().count() === 0) {
        ProductImport.insert({
            oemSerialNumberId: "oemSerialNumberId1",
            itemId: "itemId1",
            name: "name1",
            customerId: "customerId1",
            customerName: "customerName1",
            serialNumber: "serialNumber1",
            modelNumber: "modelNumber1",
            warrantyExpiryDate: "",
            url: ""
        });
    }
});