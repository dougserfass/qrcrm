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

        var qrcode = {
            text: '',
            machineName: $(e.target).find('[name=machineName]').val(),
            serialNumber: $(e.target).find('[name=serialNumber]').val()
        }
        var id = qrCode.insert(qrcode);
        qrCode.update(id, {$set: {text: encodeURIComponent(Router.routes.qrCodePage.url({ _id: id }))}});
        Router.go('readQrCode', {}, { query: "text=" + encodeURIComponent(Router.routes.qrCodePage.url({ _id: id })) });
        location.reload();

        //Router.go('readQrCode', {}, { query: "text=" + qrcode.text });
        //location.reload();
    }
});