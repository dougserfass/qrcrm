Template.createQrCode.events({
    'submit form': function(e) {
        e.preventDefault();
        //var qrcode = {
            //text: encodeURIComponent($(e.target).find('[name=text]').val())
        //}
        //qrCode.insert(qrcode);
/*
        Meteor.call('shortUrl', qrcode.text, function(error, result) {
            console.log(result);
        });
*/
/*
        var accessToken = 'eba13be7f960d1593d40e4b44b4ed929e41c91b5';
        var url = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + accessToken + '&longUrl=' + qrcode.text;
        $.getJSON(
            url,
            {},
            function(response)
            {
                console.log(response.data.url);
                //if(callback)
                //callback(response.data.url);
            }
        );
*/
/*
        var accessToken = 'eba13be7f960d1593d40e4b44b4ed929e41c91b5';
        var url = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + accessToken + '&longUrl=' + encodeURIComponent($(e.target).find('[name=text]').val());
        $.getJSON(
            url,
            {},
            function(response)
            {
                var qrcode = {
                    text: encodeURIComponent(response.data.url),
                    machineName: $(e.target).find('[name=machineName]').val(),
                    serialNumber: $(e.target).find('[name=serialNumber]').val()
                }
                var id = qrCode.insert(qrcode);
                console.log(Router.routes.qrCodePage.url({ _id: id }));
                Router.go('readQrCode', {}, { query: "text=" + qrcode.text });
                location.reload();
                //console.log(response.data.url);
                //if(callback)
                //callback(response.data.url);
            }
        );
*/
        var product = {
            name: $(e.target).find('[name=productName]').val(),
            serialNumber: $(e.target).find('[name=serialNumber]').val()
        }
        var productId = Product.insert(product);
        var qrcode = {
            url: '',
            productName: product.name
        }
        var qrCodeId = qrCode.insert(qrcode);
        //qrCode.update(qrCodeId, {$set: {url: encodeURIComponent(Router.routes.readProduct.url({ _id: productId }))}});
        qrCode.update(qrCodeId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
        Router.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: productId })) });
        location.reload();

        //Router.go('readQrCode', {}, { query: "text=" + qrcode.text });
        //location.reload();
    }
});