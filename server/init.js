Meteor.startup(function () {
    if (Software.find().count() === 0) {
        Software.insert({name: "software1"});
    }
    if (qrCode.find().count() === 0) {
        qrCode.insert({
            url: encodeURIComponent("http://jindo.dev.naver.com/collie"),
            productName: "productName1"
        });
    }
    if (Product.find().count() === 0) {
        Product.insert({
            name: "productName1",
            serialNumber: "serialNumber1"
        });
    }
});