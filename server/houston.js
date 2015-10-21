Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
//Houston.add_collection(Meteor.roles);
Houston.hide_collection(Software);
Houston.add_collection(Product);
Houston.add_collection(ProductImport);
Houston.add_collection(ProductExport);
Houston.add_collection(Case);

Houston.methods("Product", {
    "QR Code": function (product) {
        return "";
    }
});