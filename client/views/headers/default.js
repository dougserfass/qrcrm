Meteor.startup(function () {
  Meteor.subscribe('productImport');
  Meteor.subscribe('productImportCounter');
  Meteor.subscribe('productExport');
  Meteor.subscribe('productExportCounter');
  Meteor.subscribe('allProducts');
});

Template.defaultHeader.events({
  'click #importProduct': function(e) {
    e.preventDefault();
    var self = this;
    var productImports;
    var callback = function (data) {
      //console.log(data);
      self.productImports = JSON.parse(data);
      var qrrecordids = '';
      for (var i = 0; i < self.productImports.length; i++) {
        if(i == 0) {
          qrrecordids = self.productImports[i].QRRecordID;
        } else {
          qrrecordids = qrrecordids + '|' + self.productImports[i].QRRecordID;
        }
      }
      var callback = function (data) {
        if (JSON.parse(data).IDsSynced === undefined) {
          ;
        } else {
          var idsSynced = JSON.parse(data).IDsSynced.split("|");
        }
        var position;
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
        '&compid=TSTDRV1432101'+
        '&h=a9509fb520cef5f539c2'+
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
    };
    var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
      '?script=965'+
      '&deploy=1'+
      '&compid=TSTDRV1432101'+
      '&h=a9509fb520cef5f539c2'+
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
  },
  'click #exportProduct': function(e) {
    e.preventDefault();
    //console.log(Meteor.settings.public.houston_documents_per_page);
    var self = this;
    var productExports;
    var callback = function (data) {
      self.productExports = JSON.parse(data);
      var productExportArray = ProductExport.find().fetch();
      for (var i = 0; i < productExportArray.length; i++) {
        ProductExport.remove(productExportArray[i]._id);
      }
      var aProduct;
      var productArray = Product.find({oemSerialNumberId: {$in: self.productExports}}).fetch();
      //var productArray = Product.find().fetch();
      for (var i = 0; i < productArray.length; i++) {
        aProduct = productArray[i];
        var productExport = {
          oemSerialNumberId: aProduct.oemSerialNumberId,
          itemId: aProduct.itemId,
          name: aProduct.name,
          customerId: aProduct.customerId,
          customerName: aProduct.customerName,
          serialNumber: aProduct.serialNumber,
          modelNumber: aProduct.modelNumber,
          warrantyExpiryDate: aProduct.warrantyExpiryDate,
          url: aProduct.url
        };
        ProductExport.insert(productExport);
      }
      var product, products;
      products = ProductExport.find().fetch();
      var remaining = products.length;
      var i = -1;
      var col = 9;
      var row = 9;
      $('#qrcode').empty();
      var doc = new jsPDF();
      function nextStep(){
        i++;
        if(i == products.length) return;
        product = products[i];
        new QRCode("qrcode", {text: product.url, width: 64, height: 64});
        html2canvas(document.getElementById("qrcode"), {
          background :'#FFFFFF',
          onrendered: function(canvas) {
            var imgData = canvas.toDataURL('image/jpeg');
            doc.setFontSize(7);
            //doc.text(col, row-1, product.customerName.substring(0,12));
            doc.addImage(imgData, 'JPEG', col, row);
            //doc.text(col, row+19, product.name.slice(-12));
            doc.text(col, row+19, product.serialNumber);
            col = col + 25;
            if( col > 204 ) {
              col = 9;
              row = row + 30;
            }
            if( row > 250 ) {
              row = 9;
              doc.addPage();
            }
            remaining--;
            if (remaining === 0) {
              doc.save('export.pdf');
              $('#qrcode').empty();
            } else {
              $('#qrcode').empty();
              nextStep();
            }
          }
        });
      }
      nextStep();
    };
    var url = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl'+
      '?script=968'+
      '&deploy=1'+
      '&compid=TSTDRV1432101'+
      '&h=80736b669f8b8cc1448a';
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
  /*,
  'click #exportProduct': function(e) {
    e.preventDefault();
    var productExportArray = ProductExport.find().fetch();
    for (var i = 0; i < productExportArray.length; i++) {
      ProductExport.remove(productExportArray[i]._id);
    }
    var aProduct;
    var productArray = Product.find().fetch();
    for (var i = 0; i < productArray.length; i++) {
      aProduct = productArray[i];
      var productExport = {
        oemSerialNumberId: aProduct.oemSerialNumberId,
        itemId: aProduct.itemId,
        name: aProduct.name,
        customerId: aProduct.customerId,
        customerName: aProduct.customerName,
        serialNumber: aProduct.serialNumber,
        modelNumber: aProduct.modelNumber,
        warrantyExpiryDate: aProduct.warrantyExpiryDate,
        url: aProduct.url
      };
      ProductExport.insert(productExport);
    }
    var product, products;
    products = ProductExport.find().fetch();
    var remaining = products.length;
    var i = -1;
    var col = 9;
    var row = 9;
    $('#qrcode').empty();
    var doc = new jsPDF();
    function nextStep(){
      i++;
      if(i == products.length) return;
      product = products[i];
      new QRCode("qrcode", {text: product.url, width: 64, height: 64});
      html2canvas(document.getElementById("qrcode"), {
        background :'#FFFFFF',
        onrendered: function(canvas) {
          var imgData = canvas.toDataURL('image/jpeg');
          doc.setFontSize(7);
          doc.text(col, row-1, product.customerName.substring(0,12));
          doc.addImage(imgData, 'JPEG', col, row);
          doc.text(col, row+19, product.name.slice(-12));
          col = col + 25;
          if( col > 204 ) {
            col = 9;
            row = row + 30;
          }
          remaining--;
          if (remaining === 0) {
            doc.save('export.pdf');
            $('#qrcode').empty();
          } else {
            $('#qrcode').empty();
            nextStep();
          }
        }
      });
    }
    nextStep();
  }*/
  /*,
  'click #exportProduct': function(e) {
    e.preventDefault();
    var doc = new jsPDF();
    var frame, frames, _i, _len;
    frames = ProductExport.find().fetch();
    var remaining = frames.length;
    for (_i = 0, _len = frames.length; _i < _len; _i++) {
      frame = frames[_i];
      new QRCode("qrcode", {text: frame.url, width: 128, height: 128});
      html2canvas(document.getElementById("qrcode"), {
        background :'#FFFFFF',
        onrendered: function(canvas) {
          var imgData = canvas.toDataURL('image/jpeg');
          doc.addImage(imgData, 'JPEG', 10, 10);
          remaining--;
          if (remaining === 0)
          {
            doc.save('export.pdf');
          }
          doc.addPage();
          //$('#qrcode').empty();
        }
      });
    }
  }*/
});

Template.defaultHeader.helpers({
  currentUserIsAdmin: function () {
    Meteor.call('currentUserIsAdmin', function(error, result) {
      Session.set('currentUserIsAdminResult', result);
    });
    return Session.get('currentUserIsAdminResult');
  }
})