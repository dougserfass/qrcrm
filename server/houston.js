Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
//Houston.add_collection(Meteor.roles);
Houston.hide_collection(Software);
Houston.add_collection(Product);

Houston.methods("Product", {
    "QR Code": function (product) {
        //this.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: product._id })) });
/*
        Meteor.users.remove(user._id);
        Accounts.createUser({
            email: user.emails[0].address,
            password: user.services.password.bcrypt,
            profile: { name: user.name }
        });
*/
        return "";
    }
});