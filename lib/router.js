Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});
Router.map(function() {
    this.route('defaultLanding', {path: '/'});
    this.route('createSoftware');
    this.route('vm');
    this.route('hW');
    this.route('readQrCode');
    this.route('createProduct');
    this.route('readProduct', {
        path: '/product/:_id',
        waitOn: function() {
            return Meteor.subscribe('singleProduct', this.params._id);
        },
        data: function() { return Product.findOne(this.params._id); }
    });
    this.route('createCase');
    this.route('readCase', {
        path: '/case/:_id',
        waitOn: function() {
            return Meteor.subscribe('singleCase', this.params._id);
        },
        data: function() { return Case.findOne(this.params._id); }
    });
    this.route('importProduct'/*, {
        waitOn: function() {

            var callback = function (data) {

                var productImportArray = ProductImport.find().fetch();
                for (var i = 0; i < productImportArray.length; i++) {
                    ProductImport.remove(productImportArray[i]._id);
                }

                console.log('data='+JSON.stringify(data));
                var productImports = JSON.parse(data);
                for (var i = 0; i < productImports.length; i++) {
                    var productImport = {
                        id: productImports[i].itemID,
                        companyId: productImports[i].customerID,
                        serialNumber: productImports[i].serialNo,
                        modelNumber: '',
                        warrantyExpiryDate: productImports[i].warrantyExpDate,
                        url: ''
                    };
                    ProductImport.insert(productImport);
                }
            };
            var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
                '?script=965'+
                '&deploy=1'+
                '&compid=TSTDRV1310110'+
                '&h=8bd74adbbdab4c43cec7';
            var data = '';
            $.ajax({
                url: url,
                dataType: 'jsonp',
                crossDomain: true,
                data: data,
                success: callback,
                error: callback
            });
        }
    }*/);
    this.route('readProductImport');
});
/*
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('defaultLanding');
  } else {
    this.next();
  }
}
Router.onBeforeAction('loading');
*/

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else
            this.render('defaultLanding');
    } else {
        this.next();
    }
}
Router.onBeforeAction('loading');
//Router.onBeforeAction(requireLogin, {only: 'taskSubmit'});
Router.onBeforeAction(requireLogin, {except: ['readProduct','createCase','readCase']});