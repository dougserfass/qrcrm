Meteor.startup(function () {
    Meteor.subscribe('productImport')
})

Template.importProduct.helpers({
    productImports: function () {

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
            Router.go('readProductImport');
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
        return ProductImport.find();
    }
})