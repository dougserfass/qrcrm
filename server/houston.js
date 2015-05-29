Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
//Houston.add_collection(Meteor.roles);
Houston.hide_collection(Software);
Houston.add_collection(Product);

Houston.add_collection(Case);

Houston.methods("Product", {
    "QR Code": function (product) {
/*
        Router.map(function () {
            this.route('', {
                where: 'server',
                path: '/',

                action: function () {
                    this.response.writeHead(301, {Location: Router.url('serverFile', {url: this.param.url})});
                    this.response.end();
                }
            });
        });
*/

/*

        Router.route('dfsdfsdfsd',function () {
            this.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: product._id })) });

        }, {where: 'server'});
*/


        //Router.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: product._id })) });
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