Template.createProduct.events({
    'submit form': function(e) {
        e.preventDefault();
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
/*
        var data = {id: '24567', user: '23455'};
        var url = 'https://forms.netsuite.com/app/site/hosting/scriptlet.nl?script=23&deploy=1&compid=434534&h=88603ee219c4dc2d8b56&callback=?';
        $.getJSON(url,
            data)
            .done(function(data){
                myCallBack(data)
            })
*/
/*
        var url = 'https://forms.netsuite.com/app/site/hosting/scriptlet.nl?script=23&deploy=1&compid=434534&h=88603ee219c4dc2d8b56';
        $.getJSON(
            url,
            {id: '24567', user: '23455'},
            function(response)
            {
                console.log(response.data);
                var product = {
                    name: $(e.target).find('[name=name]').val(),
                    serialNumber: $(e.target).find('[name=serialNumber]').val(),
                    url: ''
                }
                var productId = Product.insert(product);
                Product.update(productId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
                Router.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: productId })) });
                location.reload();
            }
        );
*/
/*
        var url = 'https://forms.netsuite.com/app/site/hosting/scriptlet.nl?script=23&deploy=1&compid=434534&h=88603ee219c4dc2d8b56&callback=?';
        $.getJSON(url, function(jsonp){
            console.log(JSON.stringify(jsonp, null, 2));
        });
*/
/*
        var pm_url = 'http://twitter.com/status';
        pm_url += '/user_timeline/stephenfry.json';
        pm_url += '?count=10&callback=photos';
        var photos = function (data) {
            alert(data);
        };
        $.ajax({
            url: pm_url,
            dataType: 'jsonp',
            jsonpCallback: photos,
            jsonp: false
        });
*/
/*
        var callback = function (data) {
            console.log(data);

            var product = {
                name: $(e.target).find('[name=name]').val(),
                serialNumber: $(e.target).find('[name=serialNumber]').val(),
                url: ''
            }
            var productId = Product.insert(product);
            Product.update(productId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
            Router.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: productId })) });
            location.reload();


        };
        var data = '';
        $.ajax({
            url: "http://www.geonames.org/postalCodeLookupJSON?postalcode=19067&country=US",
            dataType: 'jsonp',
            crossDomain: true,
            data: data,
            success: callback,
            error: callback
        });
*/



/*
        $.ajax({
            url: "https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=963&deploy=1",
            data: {
                "recordtype": "supportcase",
                "s_no": "909",
                "model_no": "ABC000123",
                "location": "Oz",
                "inc_mess": "The equipment I bought last weekend was faulty",
                "product" : 3 },
            type: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent-x": "SuiteScript-Call",
                "Authorization": "",
                "Connection": "keep-alive",
                "Content-Type": "application/json"
            },
            success: function() { alert('Success!' + authHeader); }
        });
*/
/*
        $.ajax({
            type: "GET",
            url: "https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=963&deploy=1",
            contentType: "application/json",
            data: JSON.stringify({
                recordtype: "supportcase",
                s_no: "909",
                model_no: "ABC000123",
                location: "Oz",
                inc_mess: "The equipment I bought last weekend was faulty",
                product : 3
            }),
            dataType: "text",
            headers: {
                Accept: "application/json",
                "User-Agent-x": "SuiteScript-Call",
                Authorization: "NLAuth nlauth_email=sahil28v@gmail.com, nlauth_signature=NSoffice22, nlauth_account=TSTDRV1291213, nlauth_role=3",
                Connection: "keep-alive",
                "Content-Type": "application/json"
            },
            success: function( response ){
                console.log(response);
            },
            error: function( error ){
                console.log( "ERROR:", error );
            },
            complete: function(){
            }
        });
*/
/*
        var callback = function (data) {
            console.log(data);

             var product = {
             name: $(e.target).find('[name=name]').val(),
             serialNumber: $(e.target).find('[name=serialNumber]').val(),
             url: ''
             }
             var productId = Product.insert(product);
             Product.update(productId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
             Router.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: productId })) });
             location.reload();


        };

        var data = '{';
        data += '"recordtype":'+'"'+'supportcase'+'"'+",";
        data +=  '"s_no":'+ '"'+'909'+'"'+',';
        data +=   '"model_no":'+ '"'+'ABC000123'+'"'+',';
        data +=   '"location":'+'"'+'Oz'+'"'+',';
        data +=   '"inc_mess":'+'"'+'Test for Suitelete Call'+'"'+',';
        data +=   '"product" :'+ '3';
        data +='}';

        var headers = new Array();
        headers['Content-Type'] = 'application/json' ;

        $.ajax({
            url: "https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl?script=964&deploy=1&compid=TSTDRV1291213&h=ce4725ce2a8e95a56553",
            dataType: 'jsonp',
            crossDomain: true,
            data: data,
            headers: headers,
            success: callback,
            error: callback
        });
*/


        var product = {
            id: $(e.target).find('[name=id]').val(),
            serialNumber: $(e.target).find('[name=serialNumber]').val(),
            modelNumber: $(e.target).find('[name=modelNumber]').val(),
            warrantyExpiryDate: $(e.target).find('[name=warrantyExpiryDate]').val(),
            url: ''
        }
        var productId = Product.insert(product);
        Product.update(productId, {$set: {url: Router.routes.readProduct.url({ _id: productId })}});
        Router.go('readQrCode', {}, { query: "url=" + encodeURIComponent(Router.routes.readProduct.url({ _id: productId })) });
        location.reload();

    }
});