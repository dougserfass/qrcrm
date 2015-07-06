Meteor.startup(function () {
    Meteor.subscribe('productImport')
    Meteor.subscribe('productImportCounter')
})

Template.importProduct.helpers({
    productImports: function () {
        var self = this;
        var productImports;
        var callback = function (data) {
/*
            var productImportArray = ProductImport.find().fetch();
            for (var i = 0; i < productImportArray.length; i++) {
                ProductImport.remove(productImportArray[i]._id);
            }
*/
            console.log('data 1='+JSON.stringify(data));
            //var productImports = JSON.parse(data);
            self.productImports = JSON.parse(data);
            var qrrecordids = '';
            for (var i = 0; i < self.productImports.length; i++) {
                if(i == 0) {
                    qrrecordids = self.productImports[i].QRRecordID;
                } else {
                    qrrecordids = qrrecordids + '|' + self.productImports[i].QRRecordID;
                }
/*
                var productImport = {
                    id: productImports[i].itemID,
                    name: productImports[i].itemName,
                    customerId: productImports[i].customerID,
                    customerName: productImports[i].customerName,
                    serialNumber: productImports[i].serialNo,
                    modelNumber: '',
                    warrantyExpiryDate: productImports[i].warrantyExpDate,
                    url: ''
                };
                var productImportId = ProductImport.insert(productImport);
                var productId = Product.insert(productImport);
                ProductImport.update(productImportId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
                Product.update(productId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
*/
            }
            console.log('qrrecordids='+qrrecordids);
            var callback = function (data) {
                console.log('data 2='+JSON.stringify(data));
                console.log('IDsSynced='+JSON.parse(data).IDsSynced);
                //console.log('self.productImports='+self.productImports);
                var productImportArray = ProductImport.find().fetch();
                for (var i = 0; i < productImportArray.length; i++) {
                    ProductImport.remove(productImportArray[i]._id);
                }
                for (var i = 0; i < self.productImports.length; i++) {
                     var productImport = {
                         id: self.productImports[i].itemID,
                         name: self.productImports[i].itemName,
                         customerId: self.productImports[i].customerID,
                         customerName: self.productImports[i].customerName,
                         serialNumber: self.productImports[i].serialNo,
                         modelNumber: '',
                         warrantyExpiryDate: self.productImports[i].warrantyExpDate,
                         url: ''
                     };
                     var productImportId = ProductImport.insert(productImport);
                     var productId = Product.insert(productImport);
                     ProductImport.update(productImportId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
                     Product.update(productId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
                }
            };
            var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
                '?script=965'+
                '&deploy=1'+
                '&compid=TSTDRV1310110'+
                '&h=8bd74adbbdab4c43cec7'+
                '&qrrecordids='+qrrecordids;
            var data = '';
            $.ajax({
                url: url,
                dataType: 'jsonp',
                crossDomain: true,
                data: data,
                success: callback,
                error: callback
            });
            Router.go('readProductImport');
        };
        var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
            '?script=965'+
            '&deploy=1'+
            '&compid=TSTDRV1310110'+
            '&h=8bd74adbbdab4c43cec7'+
            '&qrrecordids=';
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