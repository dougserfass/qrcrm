Meteor.startup(function () {
    Meteor.subscribe('productImport')
    Meteor.subscribe('productImportCounter')
})

Template.importProduct.helpers({
    productImports: function () {
        var self = this;
        var productImports;
        var callback = function (data) {
            //console.log('data 1='+JSON.stringify(data));
            self.productImports = JSON.parse(data);
            var qrrecordids = '';
            for (var i = 0; i < self.productImports.length; i++) {
                if(i == 0) {
                    qrrecordids = self.productImports[i].QRRecordID;
                } else {
                    qrrecordids = qrrecordids + '|' + self.productImports[i].QRRecordID;
                }
            }
            //console.log('qrrecordids='+qrrecordids);
            var callback = function (data) {
                //console.log('data 2='+JSON.stringify(data));
                //console.log('IDsSynced='+JSON.parse(data).IDsSynced);
                if (JSON.parse(data).IDsSynced === undefined) {
                    ;
                } else {
                    var idsSynced = JSON.parse(data).IDsSynced.split("|");
                }
                var position;
                //console.log('self.productImports='+self.productImports);
                var productImportArray = ProductImport.find().fetch();
                for (var i = 0; i < productImportArray.length; i++) {
                    ProductImport.remove(productImportArray[i]._id);
                }
                for (var i = 0; i < self.productImports.length; i++) {
                    position = idsSynced.indexOf(self.productImports[i].QRRecordID);
                    if (position != -1) {
                        var productImport = {
                            oemSerialNumberId: self.productImports[i].QRRecordID,
                            itemId: self.productImports[i].itemID,
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
                        ProductImport.update(productImportId, {$set: {url: Router.routes.readProduct.url({_id: productId})}});
                        Product.update(productId, {$set: {url: Router.routes.readProduct.url({_id: productId})}});
                    }
                }
            };
            var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
                '?script=965'+
                '&deploy=1'+
                '&compid=TSTDRV1376166'+
                '&h=76f084d9da3d010ec3b3'+
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
            //return ProductImport.find();
        };
        var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
            '?script=965'+
            '&deploy=1'+
            '&compid=TSTDRV1376166'+
            '&h=76f084d9da3d010ec3b3'+
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